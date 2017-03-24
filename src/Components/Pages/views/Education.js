import React from 'react';
import Icon from '../../Icon/Icon';
import Theme from '../../Theme';
import PageContent from '../PageContainer';
import Accordion from '../../Shared/Accordion/Accordion';
import '../../../Styles/Education.css';

/**
 * Assets
 */
import graduationPortrait from '../../../Assets/Grad_Portrait_Full.jpg';
import joshDianeCole from '../../../Assets/josh-cole-diane.jpg';
import ceremony from '../../../Assets/ceremony.jpg';
import css497Abstract from '../../../Assets/CSS497-Abstract.pdf';
import capstonePoster from '../../../Assets/capstone-poster.pdf';
import courseList from '../../../Assets/course_list.json';

const schoolProjects = [
  {
    label: 'Capstone Presentation',
    content: {
      date: 'March 13, 2015',
      desc: 'As a student in the CSSE Department, the last requirement I had to fulfill in order to receive my degree was complete a 400-hour internship at a company of my choice. At the end of the internship, I put together a capstone presentation in front of my peers and professors.',
      links: [
        { label: 'Abstract', icon: 'FilePDF', url: css497Abstract, download: true },
        { label: 'Capstone Poster', icon: 'FilePDF', url: capstonePoster, download: true }
      ]
    }
  },
  {
    label: 'Online Book Store',
    content: {
      date: 'March 10, 2015',
      desc: 'One of the largest projects that I completed during my CSSE degree was building an online bookstore. I was on a team of three developers tasked with building the system from the ground up.',
      links: [
        { label: 'Repo', icon: 'Repo', url: 'https://github.com/brunnerjosh/book-store' }
      ]
    }
  },
  {
    label: 'Disk Caching',
    content: {
      date: 'May 5, 2014',
      desc: 'An assignment in my Operating Systems class (CSS 430) was to implement disk caching based on the algorithm known as the Second Chance Algorithm (SCA). After completing the assignment, I measured the performance and provided screenshots to view the results.',
      links: [
        { label: 'Repo', icon: 'Repo', url: 'https://github.com/brunnerjosh/disk-caching' },
        { label: 'Project Spec', icon: 'FilePDF', url: 'http://courses.washington.edu/css430/prog/prog4.html' }
      ]
    }
  },
  {
    label: 'File System',
    content: {
      date: 'May 29, 2014',
      desc: 'Working on a team with five other students, the final project in my Operating Systems class (CSS 430) was to implement a complete Unix-like file system. I was responsible for implementing the file directory, which managed the actual files within the operating system. For this project, a file was just a string of characters that spelled some word. See each section in the repo\'s README to learn about the specific functions that came together to build the file system.',
      links: [
        { label: 'Repo', icon: 'Repo', url: 'https://github.com/brunnerjosh/file-system' },
        { label: 'Project Spec', icon: 'FilePDF', url: 'http://courses.washington.edu/css430/prog/project.html' }
      ]
    }
  },
  {
    label: 'Process Synchronization',
    content: {
      date: 'May 14, 2014',
      desc: 'This assignment\'s purpose was to exercise the implementation of Java Monitors. Specifically, the assignment had us preempt threads that were for disk read/write operations and instead allow another thread to execute. This inherently prevents the I/O-bound threads from wastefully using CPU power when other tasks could be getting completed. This was accomplished by using SysLib.wait() and SysLib.exit() calls to sleep threads and wake them when their child thread had completed.',
      links: [
        { label: 'Repo', icon: 'Repo', url: 'https://github.com/brunnerjosh/process-synchronization' },
        { label: 'Project Spec', icon: 'FilePDF', url: 'http://courses.washington.edu/css430/prog/prog3.html' }
      ]
    }
  },
  {
    label: 'Process Scheduling Algorithms',
    content: {
      date: 'April 30, 2014',
      desc: 'In my Operating Systems class (CSS 430), we were assigned to implement process scheduling algorithms on top of the school’s ThreadOS. ThreadOS is an emulated operating system based in Java. It was built by the school to help students conceptualize the operations that go on at the OS-level of the computer.',
      links: [
        { label: 'Repo', icon: 'Repo', url: 'https://github.com/brunnerjosh/process-scheduling-algorithms' },
        { label: 'Project Spec', icon: 'FilePDF', url: 'http://courses.washington.edu/css430/prog/prog2.html' }
      ]
    }
  },
  {
    label: '68k Disassembler',
    content: {
      date: 'March 12, 2014',
      desc: 'In Hardware and Computer Organization (CSS 422), I learned a lot about how the physical parts of the computer work closely together to perform operations and commands from the user. The main project that we were tasked with was to build an inverse assembler (also known as a disassembler), which converts a memory image of instructions and data back to 68k assembly language and outputs the disassembled code to the display.',
      links: [
        { label: 'Repo', icon: 'Repo', url: 'https://github.com/brunnerjosh/68k-disassembler' },
        { label: 'Full Report', icon: 'FilePDF', url: 'https://github.com/brunnerjosh/68k-disassembler/raw/master/BitCrunchers_ProjectDeliverable.pdf' }
      ]
    }
  }
];

export default class Education extends React.Component {

  renderSectionLinks (links) {
    return links.map( (link, index) => {
      return (
        <li
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <Icon
            icon={link.icon}
            color={Theme.primary.hex}
            style={{
              fontSize: '.5em',
              marginRight: '2em'
            }}/>
          <a target='_blank' href={link.url} download={link.download}>
          {link.label}
          </a>
        </li>
      )
    })
  }

  formatEducationProjects (items) {
    return items.map( item => {
      return {
        label: <h4>{item.label}</h4>,
        content: (
          <div>
            <p><em>{item.content.date}</em></p>
            <p>{item.content.desc}</p>
            <ul>{this.renderSectionLinks(item.content.links)}</ul>
          </div>
        )
      }
    })
  }

  renderCourseList () {
    const list = courseList.map( (course, index) => {
      return (
        <li key={index}>
        {course.label}
        </li>
      )
    });
    return (
      <ul>
      {list}
      </ul>
    )
  }

  renderUWSection () {
    return (
      <div className='education__uw'>
        <div className='row'>
          <div className='col-xs-4'>
            <img src={graduationPortrait} alt="graduation-portrait" />
          </div>
          <div className='col-xs-8'>
            <div className='row'>
              <div className='col-xs-6'>
                <img src={joshDianeCole} alt='josh-diane-cole' />
              </div>
              <div className='col-xs-6'>
                <img src={ceremony} alt='josh-diane-cole' />
              </div>
            </div>
          </div>
        </div>
        <div className='education__uw-logo'>
          <Icon icon='UWBSTEM' style={{ height: 'auto' }} />
        </div>
      </div>
    )
  }

  renderPageContent () {
    return (
      <div>
        <h1>Education</h1>
        <p>I have a Bachelor of Science in Computer Science and Software Engineering (CSSE) from the University of Washington.</p>
        {this.renderUWSection()}
        <h2>Course List</h2>
        <p>Here are the courses I took once I was in my degree. Learn more about the CSSE degree <a href='https://www.uwb.edu/bscsse' target='_blank'>here</a>.</p>
        {this.renderCourseList()}
        <h2>Course Projects</h2>
        <p>While working toward my CSSE degree, my course work often required that I produce projects while collaborating alongside my colleagues. Instead of letting those projects get forgotten in time, I wanted to share my favorites here.</p>
        <Accordion items={this.formatEducationProjects(schoolProjects)} />
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
