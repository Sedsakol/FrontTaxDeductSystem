module.exports = {
    devServer: {
        port: 8080 ,
        host: '0.0.0.0',        
        //public: '161.246.5.140:8080',
        proxy: {
            '^/' : {
                target: 'http://161.246.5.140',
                changeOrigin: true
            },
        }
    } 
}