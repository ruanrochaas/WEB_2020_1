import React, { Component } from 'react'
import Card from './commons/RestrictedCard'
import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

import TableRow from "./TableRow";
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <List firebase={firebase} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props)
        //firebase
        this._isMounted = false
        this.state = { disciplinas: [], loading: false }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }
    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })
        FirebaseService.list(this.props.createFirestoreInstance(),
            (disciplinas) => {
                this._isMounted && this.setState({ disciplinas: disciplinas, loading: false })
            })
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    apagarElementoPorId(id) {
        let tempdisciplinas = this.state.disciplinas
        for (let i = 0; i < tempdisciplinas.length; i++) {
            if (tempdisciplinas[i]._id === id) {
                tempdisciplinas.splice(i, 1)
            }
        }
        this._isMounted && this.setState({ disciplinas: tempdisciplinas })
    }
    montarTabela() {
        if (!this.state.disciplinas) return
        if (this.state.loading) return this.loadingSpinner()
        return this.state.disciplinas.map(
            (est, i) => {
                return <TableRow disciplina={est}
                    key={i}
                    apagarElementoPorId={this.apagarElementoPorId}
                    firebase={this.props.firebase} />
            }
        )
    }
    loadingSpinner() {
        return (
            <tr style={{ backgroundColor: '#fff' }}>
                <td colSpan='6'>
                    <div className="text-center">
                        <div className="spinner-border ml-auto"
                            role="status"
                            aria-hidden="true"
                            style={{ width: '3rem', height: '3rem' }}></div><br />
                        <strong>Loading...</strong>
                    </div>
                </td>
            </tr>
        )
    }
    logout() {
        this.props.mySignout(
            () => {
                this.props.history.push('/signin')
            }
        )
    }
    render() {
        return (
            <Card title='Listar Disciplinas' history={this.props.history}>
                <div style={{ marginTop: 10 }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Capacidade</th>
                                <th colSpan="2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.montarTabela()}
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-danger'
                    onClick={() => this.logout()}
                >
                    Fazer Logout
                </button>
            </Card>
        )
    }
}
function mapStateToProps(state) {
    return {
        userMsg: state.authReducer.authMsg,
        firebaseAuth: state.firebaseReducer.auth
    }
}
function mapDispatchToProps(dispatch) {
    return {
        mySignout(callback) {
            const action = signout(callback)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPage)



/* import React, {Component} from 'react'
import Card from './commons/RestrictedCard'

import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

class ContentA extends Component{

    logout(){
        this.props.mySignout(
            ()=>{
                this.props.history.push('/signin')
            }
        )
    }

    render(){
        return (
            <Card title='Conteúdo A' history={this.props.history}>
                Conteúdo apenas para usuários. <br /><br />
                <button className='btn btn-danger'
                    onClick={()=>this.logout()}
                >
                    Fazer Logout
                </button>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        userMsg: state.authReducer.authMsg,
        firebaseAuth: state.firebaseReducer.auth
    }
}

function mapDispatchToProps(dispatch){
    return{
        mySignout(callback) {
            const action =  signout(callback)
            dispatch(action)  
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContentA) */