
const colors = {
    "black": "\x1b[30m",
    "red": "\x1b[31m",
    "green": "\x1b[32m",
    "yellow": "\x1b[33m",
    "cyan": "\x1b[36m",
    "white": "\x1b[37m",
    "reset": "\x1b[0m"
}

const font_control = {
    "bold": "\x1b[1m",
    "italic": "\x1b[3m",
    "underline": "\x1b[4m"
}


type logutil_opts = {
    level: number;
}


class LogUtil {
    private level: number;

    constructor(opts:logutil_opts) {
        this.level = opts.level
    }

    debug(message: string) {
        if ( this.level >= 5 ) {
            console.log(`[${colors.yellow}${font_control.bold}DEBUG${colors.reset}] ${message}`)
        }
    }

    error(message: string) {
        if ( this.level >= 4 ) {
            console.log(`[${colors.red}${font_control.bold}ERROR${colors.reset}] ${message}`)
        }
    }

    info(message: string) {
        if (this.level >= 2) {
            console.log(`[${colors.cyan}${font_control.bold}INFO${colors.reset}] ${message}`)
        }
    }
}




export default LogUtil