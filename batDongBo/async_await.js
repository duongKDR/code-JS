var ngay = [
    {
        day: 1,
        note_id: 1
    },
    {
        day: 2,
        note_id: 1
    }, {
        day: 3,
        note_id: 4
    }, {
        day: 4,
        note_id: 4
    }, {
        day: 5,
        note_id: 2
    },
]

var note = [
    {
        id: 1,
        note: "Nang"
    },
    {
        id: 2,
        note: "mua"
    },
    {
        id: 3,
        note: "mat"
    },
    {
        id: 4,
        note: "lanh"
    },
]

function thoiTiet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ngay)
        }, 5000);

    })

}

async function getNoteId(noteId) {

    return await new Promise((resolve, reject) => {
     
            var tiet = note.filter(function (tt) {
                return noteId.includes(tt.id)
            })
            resolve(tiet)

            if(tiet == undefined) { reject ("co loi")}
     

        
    })

}
thoiTiet()
    .then((ngays) => {
        var ngayIds = ngay.map((ngays) => { return ngays.note_id })

        console.log(ngayIds);
       return getNoteId(ngayIds)
            .then(function (params) {

                return { 
                    day: ngay,
                    note: params
                }
             
            })

    })
    .then(function name(params) {
   
        console.log(params);
    })
    .catch((err) => {console.log( err)})
    .finally(() => { console.log( "xong");})
console.log("oooooooooooooooooooo");



