import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Select from "react-select";
import styles from "../styles/Array.module.css";
import BubbleSort from "../Algorithms/bubbleSort.js";
import InsertionSort from "../Algorithms/insertionSort.js";
import SelectionSort from "../Algorithms/selectionSort.js";
import MergeSort from "../Algorithms/mergeSort.js";
import QuickSort from "../Algorithms/quickSort.js";

import "../App.css";

function SortingVisualiser() {

    const options = [
        { value: 'BubbleSort', label: 'Bubble Sort' },
        { value: 'InsertionSort', label: 'Insertion Sort' },
        { value: 'SelectionSort', label: 'Selection Sort' },
        { value: 'MergeSort', label: 'Merge Sort' },
        { value: 'QuickSort', label: 'Quick Sort' }
    ];

    const [array, setArray] = useState([]);
    const [size, setSize] = useState(90);
    const [speed, setSpeed] = useState(25);
    const [algorithm, setAlgorithm] = useState(null);
    const [text, setText] = useState("Sorting Visualizer");
    const [isDisable, setIsDisable] = useState(false);
    const [resetDisabled, setResetDiasabled] = useState(false);

    useEffect(() => {
        generateArray();
    }, []);

    function generateArray() {
        const numbers = [];
        for (var i = 0; i < size; i++) {
            var number = Math.floor((Math.random() * 30) + 1);
            numbers.push(number);
        }

        console.log(numbers);
        setArray(numbers);

    }

    function handleSize(event) {
        setSize(event.target.value);
        generateArray();

    }

    function handleSpeed(event) {
        setSpeed(event.target.value);
    }

    function handleResetArray() {
        generateArray();


    }

    async function handleSort() {
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
                case "BubbleSort":
                    await BubbleSort(speed);
                    setIsDisable(false);
                    setResetDiasabled(false);
                    toast.success("Completed");
                    break;
                case "SelectionSort":
                    await SelectionSort(speed);
                    setIsDisable(false);
                    setResetDiasabled(false);
                    toast.success("Completed");
                    break;
                case "InsertionSort":
                    await InsertionSort(speed);
                    setIsDisable(false);
                    setResetDiasabled(false);
                    toast.success("Completed");
                    break;
                case "MergeSort":
                    await MergeSort(speed);
                    setIsDisable(false);
                    setResetDiasabled(false);
                    toast.success("Completed");
                    break;
                case "QuickSort":
                    await QuickSort(speed);
                    setIsDisable(false);
                    setResetDiasabled(false);
                    toast.success("Completed");
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

                <div className="w-[20%] h-[100%] bg-blue-950 items-center flex-col">
                    <h1 className="font-semibold text-yellow-300 text-2xl p-4 mt-3 mb-20 ml-[8px]">{text}</h1>


                    <div className="flex flex-col justify-center p-6 h-[45%] w-[100%]">
                        <div className="mt-2 mb-2 flex flex-col">
                            <label for="array-size" className="text-yellow-300 font-normal text-[13px] self-start pl-1 mb-2 ">Array Size</label>
                            <input type="range" id="array-size" name="size" min="80" max="180" value={size} step="5" disabled={isDisable} onChange={handleSize} ></input>

                        </div>

                        <div className="mt-2 mb-6 flex flex-col">

                            <label for="speed" className="text-yellow-300 font-normal text-[13px] self-start pl-1 mb-2 ">Speed Range</label>
                            <input type="range" id="speed" name="speed" min="10" max="150" value={speed} step="5" disabled={isDisable} onChange={handleSpeed}></input>

                        </div>

                        <Select defaultValue={algorithm} options={options} placeholder="Select an algorithm" onChange={setAlgorithm}></Select>

                       



                        <button className="bg-blue-950 border-solid border-yellow-300 border-[1px] rounded-md p-2 mt-6 text-yellow-300 font-normal hover:text-blue-950 hover:bg-yellow-300" onClick={handleResetArray} disabled={resetDisabled}>Reset array</button>

                        <button className="bg-green-300 rounded-md p-2 mt-4 hover:bg-pink-300 font-normal text-blue-950" onClick={handleSort} disabled={isDisable}>Visualize</button>




                    </div>
                </div>

                <div className="bg-black w-[80%] m-0 p-0 flex items-end mb-[1px]" id="sort">
                    {array.map((value, index) => (<div className={`arrayBar ${styles.arrayBar}`} key={index} style={{ backgroundColor: "yellow", height: `${value * 15}px`, width: `${(document.getElementById("sort").clientWidth / (array.length)) - 2}px`, margin: "1px" }}></div>))}
                </div>

            </div>
        </div>


    );

}

export default SortingVisualiser;