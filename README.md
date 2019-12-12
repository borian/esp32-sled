# esp32-sled

## install

Libraries: 
 
 - ESPAsyncWebServer
 - AsyncTCP


### usb permissions

https://docs.platformio.org/en/latest/faq.html#platformio-udev-rules

`sudo usermod -a -G tty $USER`
`sudo usermod -a -G uucp $USER`

`sudo chmod 0666 /dev/ttyUSB0`

## upload SPI files in data/

`pio run --target uploadfs`


## build frontend

`cd web`
`npm run build`