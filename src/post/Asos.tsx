import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";


function Asos() {
    const [ustun1, setUStun1]=useState<any>([{id:1, name:'Ustun 1'}]);
    const [ustun2, setUStun2]=useState<any>([{id:2, name:'Ustun 2'}]);
    const [ustun3, setUStun3]=useState<any>([{id:3, name:'Ustun 3'}]);
    const [input, setInput]=useState({i1:false, i2:false, i3:false});
    const [in1, setIn1]=useState<string>('');
    const [in2, setIn2]=useState<string>('');
    const [in3, setIn3]=useState<string>('');


    function Drag(e:any){
    
      let mal={};
      if (e.source.droppableId=='a') {
        let arr=[...ustun1]

        mal=JSON.parse(JSON.stringify(arr[e.source.index]));
    
        
        arr.splice(e.source.index, 1)
        if (e.destination.droppableId=='a') {
          arr.splice(e.destination.index, 0 , mal);
          setUStun1(arr);
          return;
        }
      
        
        setUStun1(arr)
        
      }
      if (e.source.droppableId=='b') {
        let arr=[...ustun2]
     
        mal=JSON.parse(JSON.stringify(arr[e.source.index]));
        
        
        arr.splice(e.source.index, 1)
        if (e.destination.droppableId=='b') {
          arr.splice(e.destination.index, 0 , mal);
          setUStun2(arr);
          return;
        }

        
        setUStun2(arr)
  
      }
      if (e.source.droppableId=='c') {
        let arr=[...ustun3]

        mal=JSON.parse(JSON.stringify(arr[e.source.index]));
    
        
        arr.splice(e.source.index, 1)
        if (e.destination.droppableId=='c') {
          arr.splice(e.destination.index, 0 , mal);
          setUStun3(arr);
          return;
        }
    
        
        setUStun3(arr)
        
      }



      if (e.destination.droppableId=='a') {
        let arr=[...ustun1];
        arr.splice(e.destination.index, 0 , mal);
      
        
        setUStun1(arr)
      }
      if (e.destination.droppableId=='b') {
        let arr=[...ustun2];
        arr.splice(e.destination.index, 0 , mal);
  
        
        setUStun2(arr)
      }
      if (e.destination.droppableId=='c') {
        let arr=[...ustun3];
        arr.splice(e.destination.index, 0 , mal);
    
        
        setUStun3(arr)
      }
      
    }

    document.addEventListener('keypress', (e)=>{
    
      if (e.key=='Enter') {
    
        if (input.i1 && in1.trim()) {
          setUStun1([...ustun1, {id:Date.now(), name:in1}]);
          setIn1('')
        }  
        if (input.i2 && in2.trim()) {
          setUStun2([...ustun2, {id:Date.now(), name:in2}]);
          setIn2('')
        }
        if (input.i3 && in3.trim()) {
          setUStun3([...ustun3, {id:Date.now(), name:in3}]);
          setIn3('')
        }      
        setInput({i1:false, i2:false, i3:false})
      }
      
    })



  return (
    <div className="w-[1200px] mx-auto mt-10">
      <DragDropContext onDragEnd={e=>Drag(e)}>
        <div className="flex justify-between">
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
                  width:'350px',
                  boxShadow:'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0)'
                }}
              
              >
                {ustun1.map((post:any, index:any) => (
                  <Draggable key={index} draggableId={String(post.id)} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="border m-2 p-1"
                      >
                        {post.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <input type="text" value={in1} onChange={e=>setIn1(e.target.value)} className={`border-blue-300 mb-2 border-2  ${input.i1 ? 'flex':'hidden'}` }/>
                <button className="border rounded px-4 py-1 bg-blue-500 text-white" onClick={()=>setInput({i1:true, i2:false, i3:false})}>+ Qator qo'shish</button>
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
                  width:'350px',
                  boxShadow:'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0)'
                }}
              >
                {ustun2.map((post:any, index:any) => (
                  <Draggable key={index} draggableId={String(post.id)} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="border m-2 p-1"
                      >
                        {post.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <input type="text"  value={in2} onChange={e=>setIn2(e.target.value)} className={`border-blue-300 mb-2 border-2  ${input.i2 ? 'flex':'hidden'}` }/>
                <button className="border rounded px-4 py-1 bg-blue-500 text-white"  onClick={()=>setInput({i1:false, i2:true, i3:false})}>+ Qator qo'shish</button>
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
                                    width:'350px',
                  boxShadow:'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0)'
                }}
              >
                {ustun3.map((post:any, index:any) => (
                  <Draggable key={index} draggableId={String(post.id)} index={index   }>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="border m-2 p-1"
                      >
                      <p>{post.name}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <input type="text"  value={in3} onChange={e=>setIn3(e.target.value)} className={`border-blue-300 mb-2 border-2  ${input.i3 ? 'flex':'hidden'}` }/>
                <button className="border rounded px-4 py-1 bg-blue-500 text-white"  onClick={()=>setInput({i1:false, i2:false, i3:true})}>+ Qator qo'shish</button>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default Asos;
