import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      userId: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = (event) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempted with:', this.state);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>
          <form onSubmit={this.handleLogin}>
            <div style={styles.inputGroup}>
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={this.state.role}
                onChange={this.handleInputChange}
                style={styles.input}
                required
              >
                <option value="">Select your role</option>
                <option value="So1">So1</option>
                <option value="So2">So2</option>
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="userId">User ID/Tank ID</label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={this.state.userId}
                onChange={this.handleInputChange}
                placeholder="Enter your ID"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Enter your password"
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.button}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginPage;

