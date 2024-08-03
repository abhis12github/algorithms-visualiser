import React, { useEffect, useState } from "react";
import Select from "react-select";
import toast, { Toaster } from 'react-hot-toast';
import Node from "../Node/Node";
import { dijkstra, getNodesInShortestPathOrder } from "../Algorithms/dijkstra";
import { Bfs } from "../Algorithms/Bfs";
import { Dfs } from "../Algorithms/Dfs";



function GraphVisualiser() {

    const options = [
        { value: 'DFS', label: 'DFS' },
        { value: 'BFS', label: 'BFS' },
        { value: 'Dijkstra', label: 'DijKstra' }
    ];

    useEffect(() => {
        generateGrid();
    }, []);


    const START_NODE_ROW = 10;
    const START_NODE_COL = 5;
    const FINISH_NODE_ROW = 15;
    const FINISH_NODE_COL = 20;
    const [grid, setGrid] = useState([]);
    const [mouseIsPressed, setMouseIsPressed] = useState(false);
    const [text, setText] = useState("Graph Visualiser");
    const [algorithm, setAlgorithm] = useState(null);
    const [isDisable, setIsDisable] = useState(false);
    const [resetDisabled, setResetDiasabled] = useState(false);


    function generateGrid() {
        const nodes = [];
        for (let row = 0; row < 18; row++) {
            const currentRow = [];
            for (let col = 0; col < 40; col++) {
                currentRow.push(createNode(col, row));
            }
            nodes.push(currentRow);
        }
        setGrid(nodes);
    };

    function getNewGridWithWallToggled(grid, row, col) {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        return newGrid;
    };

    function createNode(col, row) {
        return {
            col,
            row,
            isStart: row === START_NODE_ROW && col === START_NODE_COL,
            isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        };
    };

    function handleMouseDown(row, col) {
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
        setMouseIsPressed(true);
    }

    function handleMouseEnter(row, col) {
        if (!mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
    }

    function handleMouseUp() {
        setMouseIsPressed(false);
    }


    async function animate(visitedNodesInOrder, nodesInShortestPathOrder) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                await new Promise((resolve) => setTimeout(resolve, 10));
                await animateShortestPath(nodesInShortestPathOrder);
                return;
            }
            await new Promise((resolve) => setTimeout(resolve, 10));
            const node = visitedNodesInOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className =
                'node node-visited';

        }
    }

    async function animateShortestPath(nodesInShortestPathOrder) {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 50));

            const node = nodesInShortestPathOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className =
                'node node-shortest-path';

        }
    }

    function handleResetGrid() {
        generateGrid();
        for (let row = 0; row < 18; row++) {
            for (let col = 0; col < 40; col++) {
                const node = grid[row][col];
                if (row === START_NODE_ROW && col === START_NODE_COL) {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-start';
                }
                else if (row === FINISH_NODE_ROW && col === FINISH_NODE_COL) {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-finish';
                }
                else {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node';

                }
            }
        }
    }


    async function visualizeDijkstra() {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = await dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        await animate(visitedNodesInOrder, nodesInShortestPathOrder);
    }


    async function visualiseBFS() {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = await Bfs(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        await animate(visitedNodesInOrder, nodesInShortestPathOrder);
    }
    async function visualiseDFS() {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = await Dfs(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        await animate(visitedNodesInOrder, nodesInShortestPathOrder);
    }


    async function handleGraph() {
        setIsDisable(true);
        setResetDiasabled(true);

        if (algorithm == null) {
            toast.error("Select an algorithm");
            setIsDisable(false);
            setResetDiasabled(false);
        } else {
            const { value, label } = algorithm;
            setText(value);

            switch (value) {
                case "BFS":
                    await visualiseBFS();

                    setIsDisable(false);
                    setResetDiasabled(false);
                    break;
                case "DFS":
                    await visualiseDFS();
                    setIsDisable(false);
                    setResetDiasabled(false);
                    break;
                case "Dijkstra":
                    await visualizeDijkstra();
                    setIsDisable(false);
                    setResetDiasabled(false);
                    break;

            }
        }
    }




    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className="flex h-[100vh] w-[100%]">

                <div className="w-[20%] h-[100vh] bg-blue-950 items-center flex-col">
                    <h1 className="font-semibold text-green-300 text-2xl p-6 mt-3 mb-20 ml-[15px] ">{text}</h1>


                    <div className="flex flex-col justify-center p-6 h-[45%] w-[100%]">


                        <Select defaultValue={algorithm} options={options} placeholder="Select an algorithm" onChange={setAlgorithm}></Select>



                        <button className="bg-blue-950 border-solid border-yellow-300 border-[1px] rounded-md p-2 mt-6 text-yellow-300 font-normal hover:text-blue-950 hover:bg-yellow-300" onClick={handleResetGrid} disabled={resetDisabled}>Reset Grid</button>

                        <button className="bg-green-300 rounded-md p-2 mt-4 hover:bg-pink-300 font-normal text-blue-950" onClick={handleGraph} disabled={isDisable}>Visualize</button>




                    </div>
                </div>
                <div className="h-[100vh] w-[80%] flex justify-center items-center" id="test">

                    <div>
                        {grid.map((row, rowidx) => {
                            return <div key={rowidx}>{row.map((node, nodeidx) => {
                                const { col, row, isStart, isFinish, isWall } = node;
                                return (<Node
                                    key={nodeidx}
                                    row={row}
                                    col={col}
                                    isStart={isStart}
                                    isFinish={isFinish}
                                    isWall={isWall}
                                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                                    onMouseUp={() => handleMouseUp()}
                                ></Node>);
                            })}
                            </div>


                        })}

                    </div>
                </div>

            </div>

        </div>

    );

}

export default GraphVisualiser;