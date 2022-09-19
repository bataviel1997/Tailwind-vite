const app = document.getElementById('app')

export default function Home(){
    app.innerHTML = `
    <div class="auth">
        
        <from class="auth-from">

        <h1>Login </h1>
            <div class="from-group">
                <label>Email</label>
                <input type="email" id="email" required/>
            </div>

            <div class="from-group">
                <label>Password</label>
                <input type="password" id="password" required/>
            </div>

            <button type="submit">Login</button>
        
        
        </from>


    </div>
    `

}