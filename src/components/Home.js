import React, { useEffect } from "react";
import Card from "./card";
import styles from "../styles/Features.module.css";
import "../App.css";
import "particles.js";
import particleJSON from "../assets/particles.json";

function Home() {
    useEffect(() => {
        let resizeTimeout;

        const initParticles = () => {
            // Destroy existing particles instance if it exists
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
            // Initialize particles
            window.particlesJS("particles-js", particleJSON);
        };

        const handleResize = () => {
            // Clear the timeout if it exists
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            // Set a new timeout to reinitialize particles after resizing stops
            resizeTimeout = setTimeout(() => {
                // Manually adjust the canvas size
                const particlesContainer = document.getElementById('particles-js');
                if (particlesContainer) {
                    const canvas = particlesContainer.querySelector('canvas');
                    if (canvas) {
                        canvas.width = particlesContainer.offsetWidth;
                        canvas.height = particlesContainer.offsetHeight;
                    }
                }
                initParticles();
            }, 300); // Adjust the delay as needed
        };

        // Initialize particles initially
        initParticles();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
        };
    }, []);


    const url = "https://analytics-xi-five.vercel.app/api/events";
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer {{apiKey}}",
    };
    const eventData = {
      name: "Get started",//* required
      domain: "algorithms-visualiser.vercel.app", //* required
      description: "User getting started for project viewing",//optional
    };
  
    const sendRequest = async () => {
      axios
        .post(url, eventData, { headers })
        .then()
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return (
        <div>

            <div className="flex flex-col bg-[#0E0E0E] h-[100vh]">

                <div className="flex h-[8%] w-[100%] items-center justify-between fixed bg-[#0E0E00E] z-20">
                    <div></div>
                    <div className="flex w-[25%] justify-evenly ">
                        <h4 className="text-gray-300 p-3 hover:bg-green-300 hover:text-black"><a href="#Home">Home </a></h4>
                        <h4 className="text-gray-300 p-3 hover:bg-green-300 hover:text-black"><a href="#Features">Features </a></h4>
                        <h4 className="text-gray-300 p-3 hover:bg-green-300 hover:text-black"><a href="#AboutUs">About Us</a></h4>
                    </div>
                </div>

                <div className="h-[90%] w-[100%] relative" id="Home">
                    <div id="particles-js" className="h-[100%] w-[100%]"></div>
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="font-heading text-6xl"><span className="text-green-500 tracking-widest">Algorithm</span><br></br><span className="text-white tracking-wider">Visulaiser</span></h1> 
                        <p className="text-gray-300 font-light text-base mt-4">Algorithm Visualizer, a dynamic platform designed to demystify<br></br> the intricate processes of various algorithms through interactive visual representations.</p>
                        <button className="h-[40px] w-[125px] border-solid border-[1.5px] border-green-400 mt-6 font-semibold text-green-200 hover:bg-green-400 hover:text-black" onClick={sendRequest}>
                            <a href="#Features">Get Started <i className="fa-solid fa-arrow-right"></i></a>
                        </button>
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

            <div className="h-[150px] w-[100%] bg-[#0E0E0E] flex justify-center items-center flex-col" id="AboutUs">
                <h4 className="text-green-300 font-semibold">Follow me on :  </h4>
                <div className="mt-4 flex justify items-center">
                    <div className=" rounded-full flex items-center justify-center mb-[4px] mr-[8px] hover:bg-blue-950 text-green-300 hover:text-white"><a href="https://github.com/abhis12github"><i class="fa-brands fa-github fa-xl"></i></a></div>

                    <div className=" text-green-300 rounded-full flex items-center justify-center mb-[4px] ml-[8px] hover:text-white"><a href="https://www.linkedin.com/in/abhishek-anand-0b3862257"><i class="fa-brands fa-linkedin-in fa-xl"></i></a></div>
                </div>


            </div>
        </div>
    );
}

export default Home;


