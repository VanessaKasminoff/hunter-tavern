import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import HunterLogo from '../assets/images/hunterxhunterlogotransparent.png'
import BlueSquare from '../assets/images/bluesquare.svg'
import HXHLogoAnimation from "./HXHLogoAnimation"

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        password: '',
        license: ''
    });
    const [validated, setValidated] = useState(false);

    async function handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    }

    console.log(credentials)

    //LOGO ANIMATION
    const [altered, setAltered] = useState(false)

  // on render, or some other condition, trigger the animated state
    useEffect(() => {
        setTimeout(() => {
         setAltered(true)
        }, 1000);
     }, [])

    return (
        <div id="login-container">
            <HXHLogoAnimation altered={altered} setAltered={setAltered} />
                {/* <img className="hunter-logo" src={HunterLogo} alt="Hunter x Hunter Logo"/> */}
                <div>
                    <span><img className="blue-square" src={BlueSquare} alt="Blue square"/></span>
                    <span><img className="blue-square" src={BlueSquare} alt="Blue square"/></span>
                    <span><img className="blue-square" src={BlueSquare} alt="Blue square"/></span>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-container">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label column="lg" className="form-label">Name</Form.Label>
                        <Form.Control 
                            type="text"            
                            name="name"
                            value={credentials.name}
                            onChange={e => setCredentials({...credentials, name: e.target.value})}
                            required
                        />
                        <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">Please enter your license #.</Form.Control.Feedback>
                    </Form.Group>
                    <Button as="input" type="submit" value="Login" className="form-button"/>
                </Form>
        </div>
    )
}

export default LoginPage