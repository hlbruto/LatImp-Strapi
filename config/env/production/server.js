module.exports = ({env})=({
    url:this.env('https://latimpar.herokuapp.com/'),
    proxy:true,
    app:{
       keys: env.array('APP_KEYS',['dcbgC7C/8ZqC7aLauTTE9g==','NWrvQgn9pYVlrV4ac4Kxmw==','HWLPVKlhdiwlK2cCX0dSvw==','3j+p0kv6/zQwnVUfi1HFiQ=='])
    }
})