import pm0 from '../assets/img/pm0.png';
import pm1 from '../assets/img/pm1.png';
import pm2 from '../assets/img/pm2.png';
import pm3 from '../assets/img/pm3.png';
import pm4 from '../assets/img/pm4.png';
import pm5 from '../assets/img/pm5.png';

import upLogo from '../assets/img/logo.svg';    

function Tugas4() {
    return(
        <div>
            <body className="body">
                <a  href="#" className="up-button" draggable="false"><img src={upLogo} draggable="false"/></a>
                <h1>Process Management in Operating System</h1>
                    <h3>1. Video Summary : Process & Threads</h3>
                        <p>In order to develop a program, programmers write source code in high-level programming languages such as Java, or C++. However, computers can only understand and execute instructions in binary language consisting of 0s and 1s. Therefore, the source code must be compiled or interpreted into machine code before it can be executed by the computer.</p>
                        <p>When a program is executed, the operating system allocates system resources such as CPU, memory, and I/O devices to the program, creates a new process to run the program, and loads the program into the memory. The operating system also manages the execution of multiple processes and threads, scheduling them to run on the available hardware resources, and ensuring that they do not interfere with each other.</p>
                        <p>A process is a term used to describe a program that is currently running on an operating system. Each process has its own address space and runs independently of other processes in the system.</p>
                        <p>A thread is the smallest unit of processing that can be scheduled within a process. Threads are part of a process and share memory and system resources with the main process. Threads enable a program to perform multiple tasks simultaneously within a single process. </p>
                        <p>The main difference between processes and threads is that processes have separate and independent address spaces and system resources, while threads share the same address space and system resources with the main process. Additionally, creating a new process requires a larger allocation of resources compared to creating a new thread. However, each thread within a process can perform different tasks simultaneously, thus increasing program performance and efficiency.</p>
                        <p>In Windows, there are several ways to view the processes and threads running on the system. One way is to use the Task Manager, which is a built-in tool that provides information about the processes and threads currently running on the computer. To access Task Manager, right-click on the taskbar and select "Task Manager" from the menu. In Task Manager, select the "Processes" tab to view the list of all processes currently running on the system. The "Details" tab provides additional information about the processes, such as the CPU and memory usage. To view the threads running within a process, right-click on the process and select "Go to details".</p>
                <br></br>
                    <h3>2. The results of the Operating System Module Practicum</h3>
                        <p><b>1. Managing Service</b></p>
                        <p>Create the status of SSH service : - service sshd status</p>
                        <img src={pm0} className="pm-img" alt=''/>
                        <br></br>
                        <p>Stop the SSH service : - service sshd stop</p>
                        <img src={pm2} className="pm-img" alt=''/>
                        <br></br>
                        <p>Start the SSH service : - service sshd start</p>
                        <img src={pm1} className="pm-img" alt=''/>
                        <p>Restart the SSH service : - service sshd restart</p>
                        <img src={pm3} className="pm-img" alt=''/>
                        <br></br>
                        <p><b>2. Running Init</b></p>
                        <img src={pm4} className="pm-img" alt=''/>
                        <br></br>
                        <p><b>3. Top</b></p>
                        <img src={pm5} className="pm-img" alt=''/>
            </body>
        </div>
    )
}

export default Tugas4;