<script>
        var demo=[]
        const mydata=JSON.parse(localStorage.getItem("user"))
        console.log(mydata)
        if(mydata){
            demo=mydata
        }
        
        const submitFunction=()=>{
            event.preventDefault()
            const name=document.getElementById("name").value;
            const email=document.getElementById("email").value;
            const password=document.getElementById("password").value;
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            const stddata={name:name,email:email,password:password}
            demo.push(stddata)
            console.log(demo)
            const data=JSON.stringify(demo)
            localStorage.setItem("user",data)
            window.location.replace("http://127.0.0.1:5500/login.html");
        }
        
    </script>