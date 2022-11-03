export default function Cabin({props}){
    const {index, open, numberOfFloors} = props
    // console.log(props)
    return <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',position:"absolute", top:`${10+(numberOfFloors-index)*70}px`, left: 0, width:'60px', border: '1px solid black'}}>
        {Array(2).fill(0).map(el => <div style={{width: open?'15px':'30px', height:'50px', backgroundColor:'black'}}/>)}
        {/*<div style={{width: '30px', height:'50px', backgroundColor:'black'}}/>*/}
    </div>
}
