import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';
import './App.css';
import { useState } from 'react';

type ObjectType = {
  todolistId: string;
  title: string;
  filter: FilterValuesType;
  tasks: TasksType[];
  students: string[];
};
export type TasksType = {
  taskId: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  // let todolistId1 = v1();
  // let todolistId2 = v1();
  //
  // let [todolists, setTodolists] = useState<Array<TodolistType>>([
  //     {id: todolistId1, title: "What to learn", filter: "all"},
  //     {id: todolistId2, title: "What to buy", filter: "all"}
  // ])
  //
  // let [tasks, setTasks] = useState<TasksStateType>({
  //     [todolistId1]: [
  //         {id: v1(), title: "HTML&CSS", isDone: true},
  //         {id: v1(), title: "JS", isDone: true}
  //     ],
  //     [todolistId2]: [
  //         {id: v1(), title: "Milk", isDone: true},
  //         {id: v1(), title: "React Book", isDone: true}
  //     ]
  // });

  const [todoFromServer, setTodoFromServer] = useState<ObjectType[]>([
    {
      todolistId: v1(),
      title: 'To learn',
      filter: 'all',
      tasks: [
        { taskId: v1(), title: 'HTML&CSS', isDone: true },
        { taskId: v1(), title: 'JS', isDone: true },
        { taskId: v1(), title: 'React', isDone: false },
        { taskId: v1(), title: 'Rest API', isDone: false },
        { taskId: v1(), title: 'GraphQL', isDone: false },
      ],
      students: [
        'Rick Kane',
        'Finnlay Bentley',
        'Samia North',
        'Isaac Morton',
        'Lily-Ann Clifford',
        'Thalia Park',
        'Sapphire Cruz',
        'Cieran Vazquez',
        'Anya Estes',
        'Dominika Field',
        'Rosanna Chung',
        'Safiyah Davey',
        'Ryley Beasley',
        'Kalvin Trejo',
        'Evie-Mae Farrell',
        'Juliet Valencia',
        'Astrid Austin',
        'Lyle Montgomery',
        'Nisha Mora',
        'Kylie Callaghan',
        'Star Wilks',
        'Marissa Colley',
        'Asa Fuller',
        'Leigh Kemp',
        'Avleen Dawson',
        'Sammy Bonilla',
        'Acacia Becker',
        'Coral Shepherd',
        'Melina Molina',
        'Kiran Bailey',
        'Clara Escobar',
        'Alexandru Horn',
        'Brandon-Lee Mercado',
        'Elouise Weston',
        'King Long',
        'Kerri Searle',
        'Kanye Hamer',
        'Elwood Benitez',
        'Mikail Whitaker',
        'Bobby Hardy',
        'Talha Ferry',
        'Priscilla Landry',
        'Olivia-Grace Cain',
        'Kiaan Wallace',
        'Wesley Padilla90',
        'Ella-Grace Wooten91',
        'Kaif Molloy92',
        'Kamal Broadhurst93',
        'Bianca Ferrell94',
        'Micheal Talbot95',
      ],
    },
    {
      todolistId: v1(),
      title: 'To watch',
      filter: 'active',
      tasks: [
        { taskId: v1(), title: 'Lord of the Rings', isDone: false },
        { taskId: v1(), title: 'The Hobbit', isDone: true },
        { taskId: v1(), title: 'Harry Potter', isDone: true },
        { taskId: v1(), title: 'Matrix', isDone: false },
      ],
      students: [
        'Jago Wormald1',
        'Saul Milne2',
        'Aariz Hester3',
        'Dion Reeve4',
        'Anisa Ortega5',
        'Blade Cisneros6',
        'Malaikah Phelps7',
        'Zeeshan Gallagher8',
        'Isobella Vo9',
        'Rizwan Mathis10',
        'Menaal Leach11',
        'Kian Walton12',
        'Orion Lamb13',
        'Faizah Huynh14',
        'Crystal Vaughan15',
        'Vivien Hickman16',
        'Stuart Lu17',
        'Karol Davison18',
        'Dario Burns19',
        'Chloe Rich20',
        'Martyna Felix',
        'Nida Glass',
        'Maeve Miles',
        'Hasnain Puckett',
        'Ayman Cano',
        'Safwan Perry',
        'Fox Kelly',
        'Louise Barlow',
        'Malaki Mcgill',
        'Leanna Cline',
        'Willard Hodge',
        'Amelia Dorsey',
        'Kiah Porter',
        'Jeanne Daly',
        'Mohsin Armstrong',
        'Laurie Rangel',
        'Princess Tierney',
        'Kasim Kendall',
        'Darryl Cope',
        'Elysha Ray',
        'Liyana Harris',
        'Kashif Blackburn',
        'Atif Zimmerman',
        'Sila Hartley',
        'Ralphie Hebert',
      ],
    },
  ]);

  const removeTask = (id: string, todolistId: string) =>
    setTodoFromServer(
      todoFromServer.map(tl =>
        tl.todolistId === todolistId
          ? { ...tl, tasks: tl.tasks.filter(t => t.taskId !== id) }
          : tl
      )
    );

  const addTask = (title: string, todolistId: string) => {
    const newTask: TasksType = { taskId: v1(), title, isDone: false };
    setTodoFromServer(
      todoFromServer.map(tl =>
        tl.todolistId === todolistId
          ? { ...tl, tasks: [newTask, ...tl.tasks] }
          : tl
      )
    );
  };

  const changeStatus = (id: string, isDone: boolean, todolistId: string) =>
    setTodoFromServer(
      todoFromServer.map(tl =>
        tl.todolistId === todolistId
          ? {
              ...tl,
              tasks: tl.tasks.map(t =>
                t.taskId === id ? { ...t, isDone } : t
              ),
            }
          : tl
      )
    );

  const changeFilter = (value: FilterValuesType, todolistId: string) =>
    setTodoFromServer(
      todoFromServer.map(tl =>
        tl.todolistId === todolistId ? { ...tl, filter: value } : tl
      )
    );

  const removeTodolist = (id: string) =>
    setTodoFromServer(todoFromServer.filter(tl => tl.todolistId !== id));

  return (
    <div className='App'>
      {todoFromServer.map(tl => {
        let tasksForTodolist = tl.tasks;

        if (tl.filter === 'active') {
          tasksForTodolist = tl.tasks.filter(t => t.isDone === false);
        }
        if (tl.filter === 'completed') {
          tasksForTodolist = tl.tasks.filter(t => t.isDone === true);
        }

        return (
          <Todolist
            key={tl.todolistId}
            id={tl.todolistId}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
