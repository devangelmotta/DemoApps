const apiLinks=
{
    
    inicio:{
        login: 'http://104.248.75.182/api/auth/login',
        registro: 'http://104.248.75.182/api/auth/signup',
    },
    vehiculos: {
        categoria: 'http://104.248.75.182/api/vehiculos/category',
        tipo: 'http://104.248.75.182/api/vehiculos/tipo',
    },
    driver: {
        solicitar: 'http://104.248.75.182/api/driver/solicitud',
    },
    getServices: {
        endpoint: 'http://104.248.75.182/api/servicios'
    },
    search:{
        endpoint: ''
    },
    trackLocation:{
        coordenadas:''
    }
}

export default apiLinks;