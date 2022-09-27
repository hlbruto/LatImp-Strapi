<<<<<<< HEAD
module.exports = ({env}) => ({
    url: env('https://latimpar.herokuapp.com/'),
    proxy: true,
    app: {
=======
module.exports = ({env})=({
    url:env('https://latimpar.herokuapp.com/'),
    proxy:true,
    app:{
>>>>>>> 20a08d5 (Subiendo latimpar ok)
       keys: env.array('APP_KEYS',['dcbgC7C/8ZqC7aLauTTE9g==','NWrvQgn9pYVlrV4ac4Kxmw==','HWLPVKlhdiwlK2cCX0dSvw==','3j+p0kv6/zQwnVUfi1HFiQ=='])
    }
})
