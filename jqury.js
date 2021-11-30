var socket = io()

socket.on('log', fonction(json)){
    console.log(json)

    $('tbody').append('<tr><td>'+json.date+'</td><td>'+json.heure+'</td><td>'+json.id+'</td><td>'+json.lieu+'</td></tr>')
}
