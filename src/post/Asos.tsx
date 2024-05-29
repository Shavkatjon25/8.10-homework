import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";


function Asos() {
    const [ustun1, setUStun1]=useState<any>([{id:1, name:'Hlo'}, {id:5, name:'H'}]);
    const [ustun2, setUStun2]=useState<any>([{id:2, name:'Hell'}])
    const [ustun3, setUStun3]=useState<any>([{id:3, name:'Heo'}])

    function Drag(e:any){
      console.log(e);
      let mal={};
      if (e.source.droppableId=='a') {
        let arr=[...ustun1]

        mal=JSON.parse(JSON.stringify(arr[e.source.index]));
        console.log(mal);
        
        arr.splice(e.source.index, 1)
        if (e.destination.droppableId=='a') {
          arr.splice(e.destination.index, 0 , mal);
          setUStun1(arr);
          return;
        }
        console.log(arr);
        
        setUStun1(arr)
        
      }
      if (e.source.droppableId=='b') {
        let arr=[...ustun2]
     
        mal=JSON.parse(JSON.stringify(arr[e.source.index]));
        console.log(mal);
        
        arr.splice(e.source.index, 1)
        if (e.destination.droppableId=='b') {
          arr.splice(e.destination.index, 0 , mal);
          setUStun2(arr);
          return;
        }
        console.log(arr);
        
        setUStun2(arr)
  
      }
      if (e.source.droppableId=='c') {
        let arr=[...ustun3]

        mal=JSON.parse(JSON.stringify(arr[e.source.index]));
        console.log(mal);
        
        arr.splice(e.source.index, 1)
        if (e.destination.droppableId=='c') {
          arr.splice(e.destination.index, 0 , mal);
          setUStun3(arr);
          return;
        }
        console.log(arr);
        
        setUStun3(arr)
        
      }



      if (e.destination.droppableId=='a') {
        let arr=[...ustun1];
        arr.splice(e.destination.index, 0 , mal);
        console.log(arr);
        
        setUStun1(arr)
      }
      if (e.destination.droppableId=='b') {
        let arr=[...ustun2];
        arr.splice(e.destination.index, 0 , mal);
        console.log(arr);
        
        setUStun2(arr)
      }
      if (e.destination.droppableId=='c') {
        let arr=[...ustun3];
        arr.splice(e.destination.index, 0 , mal);
        console.log(arr);
        
        setUStun3(arr)
      }
      
    }



  return (
    <div>
      <DragDropContext onDragEnd={e=>Drag(e)}>
        <div className="flex">
          <Droppable droppableId={'a'}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={snapshot.isDraggingOver ? " isDraggingOver" : ""}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 5,
                  padding: "5px",
                }}
              >
                {ustun1.map((post:any, index:any) => (
                  <Draggable key={index} draggableId={String(post.id)} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {post.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <button className="border px-4 py-1 bg-blue-500 text-white">+ Qator qo'shish</button>
              </div>
            )}
          </Droppable>

          <Droppable droppableId={'b'}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={snapshot.isDraggingOver ? " isDraggingOver" : ""}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 5,
                  padding: "5px",
                }}
              >
                {ustun2.map((post:any, index:any) => (
                  <Draggable key={index} draggableId={String(post.id)} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {post.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <button className="border px-4 py-1 bg-blue-500 text-white">+ Qator qo'shish</button>
              </div>
            )}
          </Droppable>
          <Droppable droppableId={'c'}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={snapshot.isDraggingOver ? " isDraggingOver" : ""}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 5,
                  padding: "5px",
                }}
              >
                {ustun3.map((post:any, index:any) => (
                  <Draggable key={index} draggableId={String(post.id)} index={index   }>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {post.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <button className="border px-4 py-1 bg-blue-500 text-white">+ Qator qo'shish</button>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default Asos;
