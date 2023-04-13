import upLogo from '../assets/img/logo.svg';    

function Tugas7(){
    return(
        <div>
            <body className="body">
                <a  href="#" className="up-button" draggable="false"><img src={upLogo} draggable="false"/></a>
                <h1>Task 7: Concurrency</h1>
                    <h3>6 Paragraphs related to concurrency issues</h3>
                        <p>The problem of concurrency occurs when two or more processes compete for the same resource. During this time, the processes will compete to access the resources needed to complete the tasks being executed. The resources referred to can be I/O equipment, memory, clock, and so on.</p>
                        <p>Competition for resources occurs because there is no mechanism for exchanging information among these processes. In this condition, the process that fails to get access to the required resources will slow down. In some cases, the process can even be blocked continuously, so it never accesses the required resources.Competition for resources occurs because there is no mechanism for exchanging information among these processes. In this condition, the process that fails to get access to the required resources will slow down. In some cases, the process can even be blocked continuously, so it never accesses the required resources.</p>
                        <p>One example of concurrency is when there is conflict on I/O equipment. For example, two processes try to read or write to the same file. This condition can cause errors because both processes compete to access the same file. If both processes write to the same file at the same time, the result will be inconsistent, and one of the results will be lost.</p>
                        <p>Competition for resources can cause concurrency problems such as starvation and deadlock. Starvation occurs when a process cannot obtain the required resources even though it has been waiting for a long time. Deadlock occurs when two or more processes block each other, so no process can continue its task.</p>
                        <p>To overcome concurrency problems, a mechanism is required to manage resource access effectively and efficiently. One solution is to use synchronization techniques, where each process must follow the access protocol that has been established. This aims to ensure that each process will get resource access fairly and well-coordinated, so as to minimize concurrency problems such as starvation and deadlock.</p>
                        <p>Synchronization techniques can also be used in concurrency problems such as the Producer-Consumer Problem, where there are two or more processes that interact using the same buffer. In this problem, there are processes that act as a Producer who is responsible for adding values to the buffer and a process that acts as a Consumer who is responsible for retrieving or reducing the buffer contents.</p>
                        <p>To ensure that production and consumption processes on the buffer run safely, critical section control is needed. This aims to ensure that when the production process adds data to the buffer or when the consumption process retrieves data from the buffer, the process is protected so that it cannot be interrupted by other processes. If the production or consumption process is interrupted when the process inserts or retrieves data from the buffer, this can cause a race condition.</p>
                        <p>Race condition is a situation that occurs in concurrent programming when two or more threads or processes access shared resources or critical sections in a way that the final result of the execution is dependent on the order of access. This phenomenon can cause unexpected behaviors, such as data corruption, data inconsistency, or even system crashes. The cause of race conditions is usually the absence of proper synchronization mechanisms or the use of inadequate synchronization techniques in a concurrent environment.</p>
                        <p>To avoid race conditions, it is essential to implement proper synchronization mechanisms that guarantee mutual exclusion and avoid concurrent access to shared resources. Mutexes, semaphores, and monitors are some common techniques used to ensure mutual exclusion and prevent race conditions. Additionally, using atomic operations, such as Compare-and-Swap (CAS), can also help in avoiding race conditions. Proper design and testing of concurrent programs are also crucial to prevent race conditions.</p>
                    <br/>
                    <h3>Definition of Mutual Exclusion, Deadlock, Startvation, Data Coherence</h3>
                        <p><b>1.Mutual Exclusion.</b></p>
                        <p>Mutual Exclusion is a concept in computer science that ensures that only one process at a time can access a shared resource. This means that while one process is accessing a shared resource, other processes must wait until the resource is freed up before they can access it. Mutual Exclusion is typically implemented using synchronization techniques such as locks and semaphores.</p>
                        <br/>
                        <p><b>2.Deadlock</b></p>
                        <p>Deadlock occurs when two or more processes are blocked and unable to continue executing because each is waiting for the other to release a resource. In other words, each process is holding a resource that the other process needs, and neither can continue until the other releases its resource. Deadlock can be prevented by carefully managing resource allocation and ensuring that processes only hold resources for as long as they need them.</p>
                        <br/>
                        <p><b>3.Starvation</b></p>
                        <p>Starvation is a condition where a process is prevented from making progress because it is unable to acquire the resources it needs to continue executing. This can occur when resources are being monopolized by other processes, or when a process with lower priority is continually preempted by processes with higher priority. Starvation can be mitigated by implementing techniques such as resource allocation policies that ensure fair access to resources.</p>
                        <br/>
                        <p><b>4.Data Coherence</b></p>
                        <p>Data coherence is the principle that all copies of a shared data resource must be kept in sync at all times. This means that any updates made to the shared data by one process must be propagated to all other processes that access the same data. Data coherence is important in distributed computing systems where data is shared across multiple nodes, as it ensures that all nodes have a consistent view of the shared data. Techniques such as locking and versioning can be used to ensure data coherence in distributed systems.</p>
                    <br/>
                    <h3>Handling of Mutual Exclusion, Deadlock, Startvation, Data Coherence</h3>
                        <p><b>1.There are two types of solutions to mutual exclusion:</b></p>
                        <p>The software solution is implemented using synchronization mechanisms such as semaphores, mutexes, and monitors. These mechanisms allow only one process to access a particular resource at a time. Therefore, other processes have to wait until the resource becomes available again. Furthermore, using the right algorithms such as the Peterson algorithm and the Dekker algorithm can also be used to avoid deadlock issues related to mutual exclusion.</p>
                        <p>On the other hand, the hardware solution involves the use of special machine instructions or hardware support to provide mutual exclusion. For example, the instruction to disable interrupts ensures that a process cannot be interrupted while it is executing in a critical section. Another approach is to use a lock variable to control access to a shared resource. This technique involves setting the lock variable when a process wants to enter a critical section and releasing it when it exits.</p>
                        <br/>
                        <p><b>2.Handling Deadlock</b></p>
                        <p>To overcome deadlock, several strategies can be employed. The first strategy is to simply ignore the problem and hope that it doesn't occur. However, this strategy is not recommended as deadlock can cause significant damage to the system. The second strategy is to detect the occurrence of deadlock and then take appropriate measures to recover from it. This can be done by periodically checking the system to see if any deadlock has occurred and then taking necessary actions to recover from it. The third strategy is to avoid deadlock by using protocols that ensure the system never enters a deadlock state. This can be achieved by ensuring that additional information about the processes that request and use resources is available. The fourth strategy is to prevent deadlock from occurring by structurally contradicting the four necessary conditions for deadlock to occur.</p>
                        <p>In summary, preventing, detecting, and recovering from deadlock are essential strategies for ensuring the smooth operation of a computer system. These strategies can be implemented using various techniques such as deadlock avoidance, detection, and prevention. By employing these strategies, the system can maintain high availability and reliability while minimizing the risks associated with deadlock.</p>
                        <br/>
                        <p><b>3.How to solve starvation problem</b></p>
                        <p>To address the issue of starvation, a priority mechanism can be implemented for resource allocation. This ensures that every process gets fair access to resources based on its priority. Additionally, proper algorithm selection, such as Round Robin or FIFO algorithms, can also help avoid starvation problems.</p>
                        <br/>
                        <p><b>4.solution to to overcome the data coherence problem</b></p>
                        <p>One solution to overcome the problem of data coherence is by using cache coherence protocols such as MESI or MOESI. These protocols allow communication between caches in the system to ensure that the data stored in each cache is the same and up-to-date. In addition, the use of data locking techniques such as read/write locks can also be used to avoid data coherence issues. This is done by ensuring that only one process can read or write data at a time to avoid conflicts and data inconsistency.</p>
            
                <br/>
                <br/>
            </body>
        </div>
    )
}

export default Tugas7;