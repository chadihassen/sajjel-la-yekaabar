import React from 'react'

function Footer() {
  return (
    <div>
      <div className='parapara'>
        <img src='/DBB.png' style={{marginLeft:"431px" , marginTop:"50px"}}/>
    <p >Elegance meets comfort in our clothing brands, where timeless designs seamlessly blend with modern trends. Elevate your style with our meticulously crafted pieces that embody both sophistication and a contemporary flair.</p>
  </div>
  <div style={{marginLeft:"435px" , marginTop:"35px"}}>
  <input type='email' size={35} style={{borderBlockColor:"#0477BF" , borderRadius:"30px 0px 0px 30px" , height:"45px"}} placeholder='your email address'></input>
  <button style={{  backgroundColor:"#0477BF" , borderRadius: "0px 30px 30px 0px", border:"none", width:"120px",height:"45px"}}> sign up</button>
  </div>
  <h1 style={{textAlign:"center" , marginTop:"25px" , fontWeight:"20"}}>Follow our social network</h1>
  <div className='social'>
    <div className='p01'>    
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAC1CAMAAAADf2EhAAAAYFBMVEUdm/D////7/f8hnfAtovEpoPF+xvb4/P/Y7vx3w/Y4p/Lk8/3r9v5ct/Q8qfJovPWt2/ry+f5QsvPD5Pul1/lIrvO13vqc0/hvv/WQzviGyvfW7fzG5vvP6vw7qPK54Pq1l7ynAAAI5klEQVR4nN2daWOqOhCGZVP2VQTUHv//v7xotQbIMlkGwn0/ndNa7dOE2ZJMDs7/WIetf4G5TmFzHqIo6vvj0F1uJ533sgouLKPWO0zk5UUXqr6fPXA/1/zAUBw9XJW3tASu6v6xyN58V4nxS9+T2Qq4WxTw0V7KfmDvdhra978sgEt6T0wGxnPL+DC8/705XHWFoj1VpPx3c8vxwfWS9/+2hmtiCbRR/pljWtyyfQ3w5/9zuFPirKhTJIf2VM36Davu/Ye6f74yh+v+CQbepH6Yxp87eA31vfqPUar/vjaDO/mHWisokNEDYiMp8ob5O6Vd+/324+/LM7hu/GaBTvX+LBlLMlVBPnjpOSO/9x24Gdw4cKOua6C5R2W0UdlneoVdPf2ORzj7KVz5+4JyBTYFUzKnC8veX3zjSHzIFO7zV7igw2myHQ5ttgQbFVcsuPDzEu/h4GrQZWPIu5OfMoE7Ml5kXCUS28xcTOAItxMAo1Ql/ajbSb7qafhCwoXk63w8ukqQ3ihrHoCQcN3klQHazCyQ2Px5ykfCZdPXBkhW5YLEtrQTJNzctnooHqGimnB9BbOQsypPBFyy/IEzApxWZMJhm47bTxScyZF7UH5kEaJqK8SxlBP7V53bV1ZHwFEda286R8hon6Kt9pvkJV32/Pv56QSOHhHVZvO7GwrbZwjc2/DOfV7WhYBj/E1z5ZooTRhuwH8F+qf7QISbr+eJgGtZP2vQJVCMlrayNGm6qJ48y785KQHHLtVcleq9NF3Ns/ntMqFvqzkcx/+YevBcJB83k/82LzC4Q2wmFruvwuZ93AIQ7uANJqamdooK0l9gBYUbp6YBq7nKrPyGVSCD8qug0x08HCc3ExFUAVzBV8xiL1Cd8BOMsgGcOCnNwcNK5BhsJFwP+eFWJ0GXXPRQ0DTQFwXOS0WVo6gUF+ywSNEEKQ9N3FUknrC93CK55ierDOVq0SZaQe9XvlSZgaNaJWLBqsT+ipK9cApEfBXyPh2pwPCrjGIK2KU9oQpZwwkyx4qiJi7MoixENXWNkymcCsNTjJRzUk6X90P1RcJyosEFjMiJsRACVzyAYzI0OJ/xgRM4xcC2AM7ObeEAsTNd/waI7UQLLQMQnEbYnounJ1qq6oHgtOr4Xi3YGYlQHXqLYdVmWzV0g4j82LDN59kICE0wOANLMEE23Okf1hjAoAo2LU3Ff0E9PJbVQIyK7EtQuJO5JV0/u5bhZAyx6kMwa+nAszqgvLjuh/IevsJaLEcH83NPoa1Y5zVWmSEGwyXrlLxNKgfDmZ6YK6heQrDgEJ0tkjIKBAvOrcXvZ5V6CTinUg2gN9KRBsGCcxL88qlJsfZcfOEq0t+GuzKZrM2vX7iyJQsRIdbmMwyx6oxfuMvoL7rvrpN0R88dK5P8wr1idv/4V6+r8IpVpsXaCPSF+1Ty8+P998XugLXn07BYoSUBR1Qtvfpa3sZQ974Po8kKUAi40/xn/LbehzePxHDrrMZjqAPA7WOYKGIuqAl37e1AzJoiAYe8NoimgFlvI+CkF3ksEdNYknAr7TozLlZOMM0KVtgmgiH2mTESbqcPHXuNgoSrdhJuTcUMvmbJ6n5CZUKsAsocbn91rwP36MMEzt1HoDwVZ0/FtIaCuw0GRWwXPodLFU9ubyjOIzevfu2uHstOCZZwWOe/8HSDw+3uqWMt8FDh3B0VvZ5iB5YUOLyTwDji7u9ZltN3lbMG3ON9S7jTniYmvwMIZSEk3JGz4x8Zpq3y7Cf14c9K+hLWbvwBa9WRB4e7G9mgBHsh6XDuPioOvmCbLqPvl4u52dqYuB6cDbePmSnawcru2Gb/Aha7YCmEcxrbMwRhHyher73E7qURX9hZgdtI0O61VZE5EXZJDC0ePPF5BmELyMbWOBrQNU/c39I9K/UyRBfgmBSkeafbWFiKFvoBIJzz7KBi2+yE9EeCt10NO3p3u22UQ05/SfSUTcqjPXSgxlZsuC7Poq68PJqmKbtrb9OwHQ4t6NgeGy6x2YHDOpJxpqXF/hs2cDw4i0spwHPqHDh7V+sgPk4At0qHDxV50DPcPDhbl3wENS8YnKVDxzo4LQnnWhkyw5sb8iMUrD6bOsrhrQ0F4ZeF9UuJlgkCuNQ6mwK2JmI46yamL9MYT5gVWFaclWrrLoSz67wZb9eJApyTWuQPpCYlKFm16LyZZO9lSCZ+s8VkylhKKJwtdLFsOzVYDSWx4TSd/DUD0NKeBTaTt4VNC07peiCzkvMCUnCOc952e0qu0L9Qpm655dQMeFsPDcA57nk7q6l0u4DcLWbVcaNiplr3fdkr2pLjFo+e4g1W8vfPpdfVwzHVu8fk4cZn71GsOny5anNzFbhRp+a42oJdrNxgWRHuqarpoixHN6CLC2lWgftI4x45gHSudtKGq3C3wHly/UHNwqld2wjW/LKdNeGwtxjpsenBYe8v0r2OSwPuhL0zTPuqMXW4B3ZVTP+SOFW4EH1TkYH7gNTgUvzsoFZurq8HV13xQ8vCxB1c8nCrJD1mrjmShQvBN5trKDB0q58UnPtYZW9irlIv0YS7rbSvjdacHxdutQ2XZq5ugsO5P8NqmWlu8npXIVx4LlYs6PXGpqQILnkM6+6y9A3ffXpwfm7pbJafwns59PXqFdjC7PWST7i0eLYhbtssK7Isq/N4ozWB2PyFvM9pebdh1Vv9oiY+3JiZbX3AuEa5A/ttUNJNt5vEUrtLpOHG+GOzUx/BYPoW3gXc+Ohtsv7mHU3bSCqc4zSr4wWIaAsnfl91cnqR5j2LcnDjs7dGwvaSP2COGhVutJzDGgtw7RnLjHDhRr9XIj98Xo/i10BwoxLE9dP6jBCNyMCNWdwdJfOOr0bvJ1eEG3V69Gb52usq0/EjUbI6jp+hsNrLOlzDvxSkzJDoJ+P18bHSc0YKWiAKz73iCAb1dQuwp2TqllXTFbmMi4+z6yU0V8ySlnQ53Q0vQ5QJGOM6GsqfjcbrK+X1uTRsym64Rv2rOFFnWVH00XE4X+7hvCazmQxs1bBX/2u4/wDcBXmSexyxcwAAAABJRU5ErkJggg=='></img>
</div>
<div className='p02'>    
<img src='data:image/png;base64,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'></img>
</div> 
<div className='p03'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPjRdmnhxe-aO7lrQONiaG-jD09hRqjsIfA&usqp=CAU'></img>
</div>   


</div>
<div className='foot'>
<div className='map'>
  <img src='/map.png'></img>
  <h1>location</h1>
  <p>Rue habib borguiba NO 22 </p>
  <p>Metouia</p>
</div>
<div className='email'>
  <img src='/mail.png'></img>
  <h1>Email</h1>
  <p>Bensalemiyed172@gmail.com </p>
  <p>Hassenchadi9@gmail.com</p>
</div>
<div className='map'>
  <img src='/phone.png'></img>
  <h1>lNumber</h1>
  <p>+216 29203141 </p>
  <p>+216 96241107</p>
</div>
</div>
  
  </div>
  )
}

export default Footer