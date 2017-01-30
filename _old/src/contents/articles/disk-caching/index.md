---
title: Disk Caching
author: Josh Brunner
date: 2014-05-29
template: article.jade
---

The fourth homework assignment in my operating systems class at UW was to implement disk caching based on the algorithm known as the Second Chance Algorithm (SCA). After completing the assignment, I measured the performance and provided screenshots to view the results.

---

* [GitHub Repository](https://github.com/brunnerjosh/disk-caching)
* [Project Specification](http://courses.washington.edu/css430/prog/prog4.html)


---
# Specification
Cache.java is a program that I wrote to implement disk caching based on an algorithm called the Second Chance Algorithm (SCA). As with many caching programs, my Cache.java follows the conventional methods to perform reads/write/syncs/flushes. Cache.java uses the SCA to accomplish the task of finding a “victim” block in cache. This “victim” block is defined as the block that has not been referenced recently. As blocks are mutated in the read and write functions, their reference bit is updated to reflect the fact they they were recently referenced. A detailed description of the SCA, Read, and Write can be found below.

## Second Chance Algorithm
It loops through the cache over and over until it finds a victim ID. The basic description of the algorithm is as follows: Starting at the beginning of the array, check each block's reference bit. If the reference bit is not set (meaning it hasn't been recently used), return this as the victim. If the reference bit is set (the block has been recently used), move onto the next block in a circular fashion. However, before leaving that last block, mark its reference bit to false (hasn't been recently used), effectively giving the block a second chance.

## Read
After ensuring that read() is handed a valid blockId from disk, it looks to see if the blockId is already in Cache. If so, it reads the data from the cache at that blockId's location. If the blockId was not found (returned INVALID), it searches the cache for an empty blockId. If found, data is first read from disk into cache, then that data is read from cache to the accompanying buffer. If this empty search did not find an empty blockId, the Second Chance algorithm is used in order to find a victim blockId to be read into and read from. If all worked well, this function returns true, otherwise false.

## Write
After ensuring that write() is handed a valid blockId from disk, it looks to see if the blockId is already in Cache. If so, it writes the data from the buffer at that blockId's location into cache. If the blockId was not found (INVALID), it searches the cache for an empty blockId. If found,the data is read from buffer into cache at the empty blockId's location.If this empty search did not find an empty blockId, the Second Chance algorithm is used in order to find a victim blockId to be write into. If all worked well, this function returns true, otherwise false.

## Performance Results
Below are the results of running my Test4 program using the Second Chance Algorithm caching implementation on ThreadOS.

There are four tests that Test4 can do to test ThreadOS’s caching mechanism. Within the source code of Test4.java, a detailed description of the what the test effectively does is explained.

## Test 1: Random Accesses
a. Cache *Enabled*
![Cache Enabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test1_enabled.jpg)

b. Cache *Disabled*
![Cache Disabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test1_disabled.jpg)

## Performance Consideration
The improvement from [en/dis]abling the cache when doing randomized accesses is not too apparent in terms of increasing performance. There does seem to be a slight increase in overall write speed with a decrease in read speed when cache is enabled but nothing groundbreaking. This is likely due to the fact that blocks are randomly created and accessed. I expect that these mainly performed in an adverse manner.

## Test 2: Random Accesses
a. Cache *Enabled*
![Cache Enabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test2_enabled.jpg)

b. Cache *Disabled*
![Cache Disabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test2_disabled.jpg)

## Performance Consideration
The improvement from [en/dis]abling the cache when doing localized accesses is HUGE. When cache is enabled, since all referenced blocks are loaded into cache, the ability for the blocks to read and be written to is drastically increased. When cache is disabled, even though the blocks being written/read to are close by, the disk is forced to do multiple raw reads and rawwrites over and over. This is a great example of using disk caching to speed up localized accesses.

## Test 3: Random Accesses
a. Cache *Enabled*
![Cache Enabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test3_enabled.jpg)

b. Cache *Disabled*
![Cache Disabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test3_disabled.jpg)

## Performance Consideration
The improvement from [en/dis]abling the cache when doing mixed accesses is significant. Since, by nature, mixed accesses include 90% localized access and 10% random access, there’s going to be performance increases. I’ve already proved that localized access is drastically increased when cache is enabled. On the contrary, it doesn’t seem to matter at all if cache is enabled/disabled for random accesses. Therefore, the difference in enabling/disabling the cache for mixed accesses is a result of the performance in localized accesses.

## Test 4: Random Accesses
a. Cache *Enabled*
![Cache Enabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test4_enabled.jpg)

b. Cache *Disabled*
![Cache Disabled](https://raw.githubusercontent.com/brunnerjosh/disk-caching/master/images/test4_disabled.jpg)

## Performance Consideration
The improvement from [en/dis]abling the cache when doing adversary accesses is not significant. Whether cache is enabled or not does not seem to change the output by much. Similar to the results seen in Random Access, Adverse Access is slightly faster when cache is enabled for writing, however, and slightly slower for reading. This is the result of not using the same blocks in reading/writing at all.
