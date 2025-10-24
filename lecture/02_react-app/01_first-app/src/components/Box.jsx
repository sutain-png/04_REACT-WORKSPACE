
function Box () {
  
  const handleMouseOver = () => {
    console.log('마우스가 들어왔어요')
  }

  return(
    <div onMouseOver={handleMouseOver} 
        onMouseLeave={() => console.log("마우스 이탈")}
        >
        마우스를 올려보세요
        </div>
  )
}

export default Box