---
title: 68k Disassembler
author: Josh Brunner
date: 2014-03-12
template: article.jade
---

In CSS 422 (Hardware and Computer Organization), I learned a lot about how the physical parts of the computer work closely together to perform operations and commands from the user. The main project that we were tasked with was to build an inverse assembler (also known as a disassembler) which converts a memory image of instructions and data back to 68k assembly language and outputs the disassembled code to the display.

---

* [GitHub Repository](https://github.com/brunnerjosh/68k-disassembler)

---
*This is a skimmed down version of the [full report](https://github.com/brunnerjosh/68k-disassembler/raw/master/BitCrunchers_ProjectDeliverable.pdf)*

# Summary
Our team has been tasked with creating a disassembler for the Motorola MC68000 Microprocessor written in 68K Assembly programming language. Over the past six weeks we’ve been working to produce a quality deliverable that can disassemble a supported instruction set.

## Design Philosophy
We attempted to design our program using SCRUM software engineering methods. Our team met twice every week and communicated using email, Google Drive, Facebook, and SMS.

In a disassembler, there are typically three sub sections that come together to accomplish the disassembling of machine code. The first section is Input and Output. This job deals with inputting the test data into the program and outputting it once it has been decoded. The second job that a disassembler must have is an Operation Decode person. This person deals with reading each instruction from memory and determining what kind of operation it is. Once the operation has been determined, the last job of Effective Addressing can take place. The Effective Address person determines what kind of addressing is taking place and how many more spaces in memory must be read in order to have a complete instruction outputted.

After our first meeting, we discussed these jobs and determined who would be best in each role. Along the way, we supported each other throughout the various tasks that were required as we dug further into the instructions.

### Project Roles
* Input / Output was completed by Jonathan Mason
* Operation Decode was completed by Josh Brunner
* Effective Addressing was completed by Melissa Kjelgaard

### Operation Decode Highlights
The subroutines that were used to narrow down the comparison bits to determine what kind of instruction an operation code was were difficult to create. More specifically, the subroutine “WorL” which was used to determine what the size of an instruction was was the hardest to create. However, once this subroutine was created, the rest for the most part followed suit.

## Flow Chart
We created this flow chart to aid in the envisioning of the final system. This chart was created
during week two’s progress report and has only been modified slightly since then. Use it to follow the flow of our program’s execution.

![Flow Chart](https://raw.githubusercontent.com/brunnerjosh/68k-disassembler/master/Flowchart%20v0.jpg)

# Planning
Our team followed a rigid set of coding standards as we did not want to deviate from schedule.
We were all very busy this quarter and did not want to fall behind in our tasks. Therefore, we met right away and began planning the project and how we needed to communicate and manage the tasks at hand.

Week two was a major milestone in our teams progress. We established a method to version control as well as created a flowchart to envision the task at hand. By week three, our team had already finished decoding of MOVE and had begun work on decoding the rest. We established a title page and the main algorithms used throughout the effective addressing by week four.

## Coding Standards
* Comment as if someone else will need to interpret and use your code
* Increment the file version every time you submit RUNNING code to Google Drive
* Communicate with the team over Facebook for any questions/problems
* Show up on time (+-5 mins) to weekly meetings

# Exception Report
While this project was very difficult to complete and required a lot of debugging and testing, we feel we’ve produced a solid product. At this time, we have no deviations of expected outcomes that we are aware of.

## Output Results
In the screenshot below, you’ll find proof of our program's correct output. According to our tests, our program successfully decodes all of the required instructions and addressing modes and outputs them to the screen.

![Results Output](https://raw.githubusercontent.com/brunnerjosh/68k-disassembler/master/results-output.png)

# Team Assignments
As listed in section Project Roles, we had divided the team into the suggested three separate roles to accomplish the parts the comprise a Disassembler. The three roles are Input/Output, Operation Decode, and Effective Addressing.

## Responsibilities
Each member of the team was responsible for producing necessary code to support each
other’s progress through the assignment. It was crucial for each member to stay on task with the work schedules for that week’s Sprint. The following three sections depict what each role was responsible for and how that person got their job completed.

### Input/Output Responsibilities
Jonathan setup the assembly code to ask the user for input and then check to make sure all the input is valid. In order to check to make sure it was all valid it had to fall within legal address bounds, have an even address, know when to stop, and convert to hex. From there it was important to output the proper messages to the user to reflect the state of the machine.

### Operation Decode Responsibilities
Josh was responsible for reading in the instructions from a specific location in memory and determining what kind of instruction it was based on the first four bits in the hexadecimal word. This was accomplished using an LSR instruction to perform a logical shift of the bits to the right.

Once a code was found to match that of a supported instruction, it branched to it’s appropriate set of instructions to determine if it was a Byte, Word, or a Longword. At this point, the program branches to Effective Addressing to complete the decoding of the addressing modes.

### Effective Addressing Responsibilities
Melissa was responsible for determining the EA for the decoded instruction, and for storing good data to be printed. The source and destination bits were decoded using subroutine tables after error checking. The data was then stored in the good instruction buffer. If there was an error, this was signaled and then decoding was terminated and the program sent back to IO, where any already stored data would be ignored.

Once everything was decoded and there were no errors, the program was sent back to IO to print.
