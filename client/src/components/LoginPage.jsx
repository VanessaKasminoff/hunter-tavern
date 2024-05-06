import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import HunterLogo from '../assets/images/hunterxhunterlogotransparent.png'

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
                <img className="hunter-logo" src={HunterLogo} alt="Hunter x Hunter Logo"/>
                <Form onSubmit={handleSubmit} className="form-container">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label column="lg" className="form-label">Name</Form.Label>
                        <Form.Control 
                            type="text"            
                            name="name"
                            value={credentials.name}
                            onChange={e => setCredentials({...credentials, name: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label column="lg" className="form-label">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={e => setCredentials({...credentials, password: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="license">
                        <Form.Label column="lg" className="form-label">Hunter License #</Form.Label>
                        <Form.Control
                            type="text"
                            name="license"
                            value={credentials.license}
                            onChange={e => setCredentials({...credentials, license: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Button as="input" type="submit" value="Login" className="form-button"/>
                </Form>
        </div>
    )
}

export default LoginPage