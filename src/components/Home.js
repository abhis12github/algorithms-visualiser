import React from "react";
import homeimg from "../images/vecteezy_3d-male-character-pointing-left_24785728_5.png"
import logo from "../images/logo.png";
import Card from "./card";
import styles from "../styles/Features.module.css";
import "../App.css";



function Home() {
    return (
        <div>

            <div className="flex flex-col bg-blue-950 h-[100vh]">

                <div className="flex h-[8%] w-[100%] items-center justify-between fixed bg-blue-950">
                    <img className="h-[36px] pl-8" src={logo}></img>
                    <div className="flex w-[25%] justify-evenly">
                        <h4 className="text-gray-300 p-3 hover:bg-yellow-300 hover:text-black"><a href="#Home">Home </a></h4>
                        <h4 className="text-gray-300 p-3 hover:bg-yellow-300 hover:text-black"><a href="#Features">Features </a></h4>
                        <h4 className="text-gray-300 p-3 hover:bg-yellow-300 hover:text-black"><a href="#AboutUs">About Us</a></h4>
                    </div>
                </div>
                <div className="h-[100%] w-[100%] m-0 p-0 flex justify-center items-center" id="Home">

                    <div className="flex justify-center items-center h-[100%] w-[50%] p-8 mt-4">
                        <img className="h-[90%] w-[90%] " src={homeimg}></img>
                    </div>
                    <div className="flex flex-col justify-center pl-8 w-[50%]">
                        <h1 className="text-yellow-300 font-heading text-4xl font-semibold">Algorithms Visualiser</h1>
                        <p className="  text-gray-300 font-light gap-8 text-base mt-[4px]">Algorithm Visualizer, a dynamic platform designed to demystify the intricate processes of various algorithms through interactive visual representations.</p>
                        <button className="h-[40px] w-[125px] border-solid border-[1.5px] border-yellow-400 mt-6 font-semibold text-yellow-200 hover:bg-yellow-400 hover:text-black"><a href="#Features">Get Started  <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>


                </div>



            </div>


            <div className="h-[600px] w-[100%] flex flex-col" id="Features">
                <div className={styles.feature}>

                    <div className="flex flex-col items-center mb-12 mt-6 pt-4" >
                        <h1 className="font-semibold text-blue-950 text-xl p-3"> Our Features  🚀</h1>
                        <p className="text-gray-500 text-sm m-4 text-center ml-16 mr-16">Our algorithm visualizer provides an intuitive, interactive interface that enables users to witness the step-by-step execution of various sorting and searching algorithms in real-time.
                            With customizable speed controls and visual representations, our platform facilitates a comprehensive understanding of complex algorithms.</p>

                    </div>

                    <div className="flex justify-evenly items-center w-[100%]">
                        <Card title="Sorting" content="Sorting visualizer illustrates the reorganization of elements,through animations." text="/Home/Sorting" source="fa-solid fa-chart-column fa-2xl"></Card>
                        <Card title="Searching" content="Searching visualizer demonstrates the process of locating target elements, through animations." text="/Home/Searching" source="fa-solid fa-magnifying-glass fa-2xl"></Card>
                        <Card title="Graphs" content="Graph visualizer provides a depiction of complex relationships and connections between nodes." text="/Home/Graph" source="fa-solid fa-chart-line fa-2xl"></Card>

                    </div>



                </div>


            </div>

            <div className="h-[150px] w-[100%] bg-blue-950 flex justify-center items-center flex-col" id="AboutUs">
                <h4 className="text-yellow-300 font-semibold">Follow me on :  </h4>
                <div className="mt-4 flex justify items-center">
                <div className=" rounded-full flex items-center justify-center mb-[4px] mr-[8px] hover:bg-blue-950 text-yellow-300 hover:text-white"><a href="https://github.com/abhis12github"><i class="fa-brands fa-github fa-xl"></i></a></div>
                
                <div className=" text-yellow-300 rounded-full flex items-center justify-center mb-[4px] ml-[8px] hover:text-white"><a href="https://www.linkedin.com/in/abhishek-anand-0b3862257"><i class="fa-brands fa-linkedin-in fa-xl"></i></a></div>
                </div>
                

            </div>
        </div>
    );
}

export default Home;
