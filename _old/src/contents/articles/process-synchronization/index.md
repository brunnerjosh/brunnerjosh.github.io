---
title: Process Synchronization
author: Josh Brunner
date: 2014-05-14
template: article.jade
---

This assignment's purpose was to exercise the implementation of Java monitors. Specifically, the assignment had us preempt threads that were for disk read/write operations and instead allow another thread to execute. This inherently prevents the I/O-bound threads from wastefully using CPU power when other tasks could be getting completed. This was accomplished by using `SysLib.wait()` and `SysLib.exit()` calls to sleep threads and wake them when their child thread had completed.

---

* [GitHub Repository](https://github.com/brunnerjosh/process-synchronization)
* [Project Specification](http://courses.washington.edu/css430/prog/prog3.html)

---
# Part 1
The first part of the assignment deals with two programs, SyncQueue and QueueNode. Each program works towards the common effort of enabling threads to be able to wait for a child thread to be terminated before further execution is completed. This, in turn, is a form of implementation of Java monitors. The two paragraphs below will discuss each program’s algorithm more specifically.

## SyncQueue
This program is used to prevent threads from busy waiting on disk read and write operations. It accomplishes this by constructing a list (array) of QueueNode objects upon construction. Once created, SyncQueue provides two means of adding and removing from this array. Depending on the condition variable sent into either “enqueueAndSleep()” or “dequeueAndWakeup(),” the QueueNode at the location in the array is slept or woken, using sleep() and wakeup(), respectively.

## QueueNode
This short program is used to call the wait() and notify() methods in certain circumstances. When constructed, a new Vector called “queue” is created to hold integers that represent the waiting thread’s ID (tid). Within QueueNode’s two main functions, sleep() and wakeup(), the thread is able to put itself to sleep while in a critical section of code.

## Part 1 Results
The assignment was to:
    > Compile your SyncQueue.java and Kernel.java, and thereafter run Test2.java
    > from the Shell.class to confirm:
    > 1. Test2.java waits for the termination of all its five child threads,
    > (i.e., the TestThread2.java threads).
    > 2. Shell.java waits for the termination of Test2.java. Shell.java should
    > not display its prompt until Test2.java has completed its execution.
    > 3. Loader.java waits for the termination of Shell.java. Loader.java should
    > not display its prompt ( --> ) until you type exit from the Shell prompt.

Below is a screenshot of running Test2.java per the expected results:

![Test 2 Results](https://raw.githubusercontent.com/brunnerjosh/process-synchronization/master/images/test2_output.png)

# Part 2
The second part of this assignment was to write a user-level test thread called `Test3.java` which spawns and waits for the competition of a certain number of threads. These test threads are supposed to do numerical computation (`TestThread3a.java`) as well as random read/write operations to the disk (`TestThread3b.java`).

## Test3
This program is interesting. It is written in a way that puts the CPU’s processing power to stressful boundaries. Upon creation, the user is expected to have their desired X value loaded into argv[0]. With this number, Test3 spins up X amount of pairs of threads. The threads can be either a numerical computation task or a disk READ/WRITE task. Both of these tasks are completely pointless with respect to getting actual work done, there are simply made to demonstrate how an effective use of sleeping and waking processes is done. Once Test3 has executed these threads, it spins in two different loops so that the threads may join() when they complete.

## TestThread3a
This is one of the threads that Test3 spins up. It invokes very complex mathematical calculations including recursive factorials, square roots, and finding the tangent. It does all this in an n^2 manner with two for loops.

## TestThread3b
As the second of the threads, this thread reads and writes maximum blocks of bytes to the DISK in the folder. Once gain, a complete waste of resources but used to demonstrate how program 3 handles this kind of work.

## Part 2 Results
Below is a screenshot of running Test3.java on kernel_1.java (implemented in Part 1):
![Kernel 1 Results](https://raw.githubusercontent.com/brunnerjosh/process-synchronization/master/images/kernel_1_output.png)

Below is a screenshot of running Test3.java on kernel.java (implemented in Part 2):
![Kernel 2 Results](https://raw.githubusercontent.com/brunnerjosh/process-synchronization/master/images/kernel_2_output.png)

## Comparison
As shown in the screenshots above, the later is the clear winner. Completing Test3’s complex tasks more than 4 seconds faster proves the revised kernel.java to be the better kernel program. But of course doing simply one test is not enough to determine a faster program. Therefore, I tested each kernel alongside each other in a head-to-head race with the X variable at different numbers. You can see the results in the diagrams below.

![Kernel 2 Results](https://raw.githubusercontent.com/brunnerjosh/process-synchronization/master/images/performance-results.png)

From this data, I learned that there are a lot of factors that can effect the outcome of these tests. It appears that the percentage increase can vary greatly depending on the other CPU tasks and other factors that I might not be aware of. I believe these results might be more prominent had I been working on a dual core CPU. In the end, this data concludes that the kernel.java, which was modified to allow threads to sleep on disk operations, performs better than the kernel.java (kernel_1.java) which does not.
