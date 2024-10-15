export default function DL() {
    const isProduction = process.env.NODE_ENV === 'production';
    if(isProduction){

        return (
            <h1 className="text-center font-bold text-3xl text-orange-500">Under construction</h1>
        )
    }
    else{

        return (
            <h1 className="text-center font-bold text-3xl">Hello world</h1>
        )
    }
}