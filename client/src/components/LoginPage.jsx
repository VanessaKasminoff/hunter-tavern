import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        password: '',
        license: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
    }

    console.log(credentials)

    return (
        <div id="login-container">
                <h1>HUNTER'S TAVERN</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"            
                            name="name"
                            placeholder="Type name here..."
                            value={credentials.name}
                            onChange={e => setCredentials({...credentials, name: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Type password here..."
                            value={credentials.password}
                            onChange={e => setCredentials({...credentials, password: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="license">
                        <Form.Label>Hunter License #</Form.Label>
                        <Form.Control
                            type="text"
                            name="license"
                            placeholder="Type license here..."
                            value={credentials.license}
                            onChange={e => setCredentials({...credentials, license: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Button as="input" type="submit" value="Login"/>
                    {/* <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={credentials.name}
                        onChange={e => setCredentials({...credentials, name: e.target.value})}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={e => setCredentials({...credentials, password: e.target.value})}
                        required
                    />
                    <label htmlFor="license">Hunter License #</label>
                    <input
                        type="text"
                        id="license"
                        name="license"
                        value={credentials.license}
                        onChange={e => setCredentials({...credentials, license: e.target.value})}
                        required
                    /> */}
                    {/* <input
                        type="submit"
                        value="Login"
                    /> */}
                </Form>
        </div>
    )
}

export default LoginPage