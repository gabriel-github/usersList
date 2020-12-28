import React, { useState, useEffect } from 'react'

import Usuario from '../Usuario'

export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then( resposta => resposta.json())
        .then(dados => {
            const usuarios = dados.data.map(usuario => ({
                id: usuario.id,
                nome: usuario.first_name,
                sobrenome: usuario.last_name,
                email: usuario.email
            }))

            setUsuarios(usuarios)
        })
    }, [])

    const removerUsuario = usuario => {
        if(window.confirm(`tem certeza que deseja excluir o "${usuario.nome} ${usuario.sobrenome}" ?`)){
            fetch(`https://reqres.in/api/users/${usuario.id}`, {
                method: 'DELETE'
            })
            .then( resposta => {
                if(resposta.ok){
                    setUsuarios(usuarios.filter( x => x.id !== usuario.id))
                }
            })
        }
    }
    
    return (
        <>
            {usuarios.map(usuario => (
                <Usuario
                key={usuario.id}
                usuario={usuario}
                removerUsuario={ () => removerUsuario(usuario)}
                />
            ))}
        </>
    )
}
