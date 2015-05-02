---
title: Process Scheduling Algorithms
author: Josh Brunner
date: 2014-04-30
template: article.jade
---

In my Operating Systems class (CSS 430), our homework 2 assignment was to implement process scheduling algorithms on top of the school's ThreadOS. ThreadOS is a emulated operating system based in Java. It was built by the school to help students conceptualize the operations that go on at the OS-level of the computer.

---

* [GitHub Repository](https://github.com/brunnerjosh/process-scheduling-algorithms)

---
# Purpose
This assignment implements two process scheduling algorithms on top of ThreadOS. The names of the algorithms are the Round Robin and the Multi-Level Feedback Queue. There are a set of test programs that get called to simulate the variable times that some process take to complete execution. At the end of each algorithm section, I present screenshots of the results so that you can see how long each process took to complete execution, etc.

Feel free to read the school's full spec for this assignment [here](http://courses.washington.edu/css430/prog/prog2.html).

# Algorithms
This section will go over the two scheduling algorithms that we implemented in this assignment. Each section contains a screenshot of the performance results. Take note of the `execution time` in each process's completed results.

## Round Robin (Suspend/Resume)
Although `suspend()` and `resume()` are deprecated Java methods, we still learned them so that we could compare the performance of the different scheduling algorithms.

### Performance Results
![Performance Results](https://raw.githubusercontent.com/brunnerjosh/process-scheduling-algorithms/master/images/round-robin-output.png)

## Multi-Level Feedback Queue (MLFQ)
The MLQS algorithm utilizes three separate queues (queue0, queue1, and queue2). Each queue serves a slightly separate purpose throughout the scheduler’s use.

Upon being called by the Thread class, the run() function immediately initializes a Thread object to handle the processing of thread objects throughout the execution of the code. It then enters into an indefinite while loop to capture threads being added to queue0.

Queue0 allows threads to execute for timeSlice/2. In this case, timeSlice is defaulted to 1000ms, or 1 second. If the process hasn’t completed execution within the allotted 500ms, the process is moved to queue1.

Queue1 allows the process to execute for another 500ms and then checks to see if any new process has been added. If a new process has indeed been added to queue0, it jumps up to process that appropriately. If not, it lets the original process run for another 500ms.

If this process still hasn’t completed, it is moved to queue2 where it is allowed to run for a total of 2000ms until it is removed from the top of queue2 and added to the bottom. Queue2 follows similar scenario handling in the event of a new process being added to either queue0 or queue1 after it’s for 500ms are used.

*Please see the flowchart section below for a visual description of the multi-level queue scheduling algorithm*

### Performance Results
![Performance Results](https://raw.githubusercontent.com/brunnerjosh/process-scheduling-algorithms/master/images/mlfq-output.png)

### Flowchart
![Flow Chart](https://raw.githubusercontent.com/brunnerjosh/process-scheduling-algorithms/master/images/mlqs-flowchart.jpg)

# Execution Chart
This chart shows a breakdown of the processes (Pa, Pb, Pc, Pd, Pe, Test2, and the Scheduler) over the course of their completion while in the MLFQ.
![Execution Chart](https://raw.githubusercontent.com/brunnerjosh/process-scheduling-algorithms/master/images/mlfq-algorithm-process.png)

# Discussion
By utilizing three separate queues with three separate time quantum, the MLQS algorithm appears to have outperformed the Round Robin (suspend/resume) algorithm quite greatly. In the Comparison Results section below, you can see that the green boxes show improvement in processing while red boxes show decreases in processing when the MLQS algorithm is used against Test2.java.

The reason the MLQS performs better than the RR (suspend/resume) algorithm is because most of the processes start and finish within 2 queues. The rest get pushed down to the third queue (queue2), where larger timeSlices allow for large chunks of their CPU burst to be processed.

## Comparison Results
![Comparison Results](https://raw.githubusercontent.com/brunnerjosh/process-scheduling-algorithms/master/images/comparison-chart.png)
