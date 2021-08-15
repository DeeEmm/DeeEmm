---
published: false
title: Uploading SPIFFS using PLatformIO CLI
tags: ESP32, SPIFFS, PlatformIO,
category: ESP32
image: /images/platformio-spiffs.jpg
date: 2021-07-20 08:30:00 +9:30
---

![/images/platformio-spiffs.jpg](/images/platformio-spiffs.jpg)


I've always defaulted to the Arduino for building microcontroller based projects, I did dabble with Picaxe and PIC processors for a while but with Arduino being so accessible and easy to use it's always been the default choice. But I recently started playing with the ESP32 platform. 

The ESP processor is head a shoulders above the Arduino in speed and functionality, and being a 32 bit processor offers much higher analog resolution but it does have limitations in both memory and available I/O. So it does have some limitations when it comes to applications.









Install platformio core

python3 -c "$(curl -fsSL https://raw.githubusercontent.com/platformio/platformio/master/scripts/get-platformio.py)"


install shell commands

edit ~/.bash_profile and add following

export PATH=$PATH:~/.platformio/penv/bin

pio run -t uploadfs




~~~
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[platformio]
src_dir = DIY-Flow-Bench
lib_dir = libraries
data_dir = ESP32/diy-flow-bench/data
default_envs = release
;extra_configs=debug.ini

[common_env_data]
lib_deps_builtin = 
	ArduinoOTA
	BluetoothSerial
	DNSServer
	EEPROM
	ESPmDNS
	FS
	Preferences
	SD
	SPI
	SPIFFS
	Update
	WebServer
	WiFi
	WiFiClientSecure

[common]
build_flags = 
	;-DMACHINE_FILENAME=test_drive.h ;Remove ";" from the beginning of this line and specify the machine file
	-DCORE_DEBUG_LEVEL=0
	-Wno-unused-variable
	-Wno-unused-function

[env]
;lib_deps = 
;	TMCStepper@>=0.7.0,<1.0.0
platform = espressif32@3.0.0 ; temporary fix for lost uart rx characters
board = esp32dev
framework = arduino
upload_speed = 115200
board_build.partitions = no_ota.csv
monitor_speed = 115200
monitor_flags = 
	--eol=CRLF
	--echo
	--filter=esp32_exception_decoder
board_build.f_cpu = 240000000L
board_build.f_flash = 80000000L
board_build.flash_mode = qio
build_flags = ${common.build_flags}
src_filter = 
	+<*.h> +<*.s> +<*.S> +<*.cpp> +<*.c> +<*.ino> +<src/>
	-<.git/> -<data/> -<test/> -<tests/>

[env:release]
lib_deps = 


[env:debug]
build_type = debug
lib_deps = 


~~~






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