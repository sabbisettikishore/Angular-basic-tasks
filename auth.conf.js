const PROXY_CONFIG1 = [
    {
        context: [

            "/register"
        ],
        target: " http://172.17.12.40:8081",
        secure: false
    }
]

module.exports = PROXY_CONFIG1;