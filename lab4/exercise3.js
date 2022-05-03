class Info {
    logging(input){
        console.info(input)
    }
}

class Warn {
    logging(input){
        console.warn(input)
    }
}

class Error {
    logging(input){
        console.error(input)
    }
}

class Table {
    logging(input){
        console.table(input)
    }
}

class Strategy {
    constructor (){
        this.Strategy = ""
    }

    setStrategy (Strategy){
        this.Strategy = Strategy
    }

    logging (input){
        this.Strategy.logging(input)
    }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);