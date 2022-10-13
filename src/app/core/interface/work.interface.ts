export interface WorksModel {
     name : string,
     img : string,
     description : string,
     technology : technology[],
     url : string,
     github : string,
}

interface technology {
    name : string
}