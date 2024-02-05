import LogUtil from  "./lib/logutil"


const log = new LogUtil({ level: 5 });

log.info("this is test!")
log.debug("this is debug level!")
log.error("this is error level!")