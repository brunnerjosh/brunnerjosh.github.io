import React from 'react';
import PageContent from '../PageContainer';
import Accordion from '../../Shared/Accordion/Accordion';

const schoolProjects = [
  {
    label: <h4>Capstone Presentation</h4>,
    content: (
      <div>
        <p>TODO: make sure to mention the final report presentation (maybe include the posterboard and picture with Cole?)</p>
      </div>
    )
  },
  {
    label: <h4>Online Book Store</h4>,
    content: (
      <div>
        <p>One of the largest projects that I completed during my CS degree at UW was building an online bookstore. I was on a team of three developers tasked with building the system from the ground up.</p>
        <em>March 10, 2015</em>
        <a href='https://github.com/brunnerjosh/book-store'>Repo</a>
        <a href=''></a>
      </div>
    )
  },
  {
    label: <h4>Disk Caching</h4>,
    content: (
      <div>
        <p>The fourth homework assignment in my Operating Systems class at UW was to implement disk caching based on the algorithm known as the Second Chance Algorithm (SCA). After completing the assignment, I measured the performance and provided screenshots to view the results.</p>
        <em>May 29, 2014</em>
        <a href='https://github.com/brunnerjosh/disk-caching'>Repo</a>
        <a href='http://courses.washington.edu/css430/prog/prog4.html'>Project Spec</a>
      </div>
    )
  },
  {
    label: <h4>File System</h4>,
    content: (
      <div>
        <p>The final project in my Operating Systems class at UW was to implement a complete Unix-like file system. I was on a team of five other students and I was responsible for implementing the directory which managed the actual files. For this project, a file was just a string of characters that spelled some word. See each section in the repo's README to learn about the specific functions that came together to build the file system.</p>
        <em>May 5, 2014</em>
        <a href='https://github.com/brunnerjosh/file-system'>Repo</a>
        <a href='http://courses.washington.edu/css430/prog/project.html'>Project Spec</a>
      </div>
    )
  },
  {
    label: <h4>Process Synchronization</h4>,
    content: (
      <div>
        <p>This assignment’s purpose was to exercise the implementation of Java Monitors. Specifically, the assignment had us preempt threads that were for disk read/write operations and instead allow another thread to execute. This inherently prevents the I/O-bound threads from wastefully using CPU power when other tasks could be getting completed. This was accomplished by using SysLib.wait() and SysLib.exit() calls to sleep threads and wake them when their child thread had completed.</p>
        <em>May 14, 2014</em>
        <a href='https://github.com/brunnerjosh/process-synchronization'>Repo</a>
        <a href='http://courses.washington.edu/css430/prog/prog3.html'>Project Spec</a>
      </div>
    )
  },
  {
    label: <h4>Process Scheduling Algorithms</h4>,
    content: (
      <div>
        <p>In my Operating Systems class (CSS 430), our homework 2 assignment was to implement process scheduling algorithms on top of the school’s ThreadOS. ThreadOS is an emulated operating system based in Java. It was built by the school to help students conceptualize the operations that go on at the OS-level of the computer.</p>
        <em>April 30, 2014</em>
        <a href='https://github.com/brunnerjosh/process-scheduling-algorithms'>Repo</a>
        <a href='http://courses.washington.edu/css430/prog/prog2.html'>Project Spec</a>
      </div>
    )
  },
  {
    label: <h4>68k Disassembler</h4>,
    content: (
      <div>
        <p>In CSS 422 (Hardware and Computer Organization), I learned a lot about how the physical parts of the computer work closely together to perform operations and commands from the user. The main project that we were tasked with was to build an inverse assembler (also known as a disassembler) which converts a memory image of instructions and data back to 68k assembly language and outputs the disassembled code to the display.</p>
        <em>March 12, 2014</em>
        <a href='https://github.com/brunnerjosh/68k-disassembler'>Repo</a>
        <a href='https://github.com/brunnerjosh/68k-disassembler/raw/master/BitCrunchers_ProjectDeliverable.pdf'>Full Report</a>
      </div>
    )
  }
];

export default class Education extends React.Component {

  renderPageContent () {
    return (
      <div>
        <h1>Education</h1>
        <p>I have a Bachelor of Science in Computer Science and Software Engineering (CSSE) from the University of Washington.</p>
        <h2>Class List</h2>
        <p>...</p>
        <h2>Class Projects</h2>
        <p>While working towards my Computer Science degree from the University of Washington, my course work required that I produce projects while working alongside my colleagues. Instead of letting those projects get forgotten in time, I wanted to share my favorites here.</p>
        <Accordion items={schoolProjects} />
      </div>
    )
  }

  render () {
    return (
      <PageContent
        rightSide={{
          classes: 'col-xs-12',
          content: this.renderPageContent()
        }}
        />
    )
  }
}
