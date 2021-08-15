---
published: false
title: Specify partition size for ESP32 upload 
tags: add, some, tags
category: Your Category
image: /images/123-template.jpg
date: 2020-10-20 08:30:00 +9:30
---

![/images/123-template.jpg](/images/123-template.jpg)


Hi All,

I am using the CLI with the ESP32 platform.

So far I have used the CLI to compile my project but have struck an issue when uploading. I can upload using the default partition scheme, but unfortunately this is not correct for my project...

upload -p /dev/cu.usbserial-14140 -b esp32:esp32:esp32:FlashMode=qio,UploadSpeed=115200 DIY-Flow_bench -v
What I am stuck on is the correct syntax for specifying the partition scheme.

From boards.txt I can see that the correct scheme is listed as follows

esp32.menu.PartitionScheme.no_ota=No OTA (2MB APP/2MB SPIFFS)
esp32.menu.PartitionScheme.no_ota.build.partitions=no_ota
esp32.menu.PartitionScheme.no_ota.upload.maximum_size=2097152
...and referencing this (apparently successful) post the command should look something like this...

arduino-cli upload -p /dev/cu.usbserial-14140 -b esp32:esp32:esp32 DIY-Flow-Bench -v --build-properties build.partitions=no_ota,upload.maximum_size=2097152
But this gives me the error

Error: unknown flag: --build-properties
So building on the working syntax that I used above I end up with the following...

upload -p /dev/cu.usbserial-14140 -b esp32:esp32:esp32:FlashMode=qio,UploadSpeed=115200,PartitionScheme=no_ota,upload.maximum_size=2097152 DIY-Flow_bench -v
Which invariably throws an error at the maximum_size parameter

Error during Upload: incorrect FQBN: getting build properties for board esp32:esp32:esp32: invalid option 'upload.maximum_size'
So the point that I am up to is that I cannot figure out the correct syntax for the maximum_size parameter...

no_ota.upload.maximum_size=2097152
I've tried a bunch of different ways...

PartitionScheme.maximum_size=2097152
PartitionScheme.no_ota.maximum_size=2097152 
PartitionScheme.no_ota.upload.maximum_size=2097152
no_ota.upload.maximum_size=2097152
upload.maximum_size=2097152
(Well, you get the idea)

But they all result in an error

Error during Upload: incorrect FQBN: getting build properties for board esp32:esp32:esp32: invalid option 'INSERT-WHATEVER-BADLY-FORMED-PARAMETER-I-USED-IN-HERE'
I have also been unsuccessful in searching for a solution. The post I linked to above is the closest I have found, and whilst it was certainly helpful in directing me to the boards.txt file, the syntax given in the post does not work for me and I am unable to decipher the correct format.

Any help / direction / documentation would be warmly welcomed.

I have read through the CLI documentation, but as it does not include specific usage examples I did not find a solution there.






I 'fixed' my problem :smiley:

The partition scheme identifier is unique, so it is not actually necessary to specify the size.

PartitionScheme=no_ota

is all that is required.

So the correct syntax for the upload in this case is...

arduino-cli upload -p /dev/cu.usbserial-14140 -b esp32:esp32:esp32:FlashMode=qio,UploadSpeed=115200,PartitionScheme=no_ota DIY-Flow_bench -v





[I'm an inline-style link](https://www.google.com)

# This is a heading

This is a paragraph

Double space for another paragraph

- List item
- List item
- List item

## This is a section heading

Another paragraph
Another paragraph but with a double space at the end -->  
Another paragraph  

### This is a sub Heading

Another paragraph