import {
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const courses = [
  {
    title: "UI/UX Fundamental",
    progress: 8,
    total: 16,
    img: "https://i.pinimg.com/736x/15/df/bf/15dfbf0843b06611237972853f3f7a78.jpg",
  },
  {
    title: "Flutter Development",
    progress: 8,
    total: 24,
    img: "https://i.pinimg.com/564x/53/0e/1e/530e1e323c2ff9d076775f5a71df5132.jpg",
  },
  {
    title: "Data Analist",
    progress: 12,
    total: 16,
    img: "https://i.pinimg.com/736x/b6/d9/d7/b6d9d7dbc383112eaac3900587597b1b.jpg",
  },
];

const tasks = [
  {
    type: "Discussion",
    course: "UI/UX Fundamental",
    time: "09:00 AM - 10:30 AM",
  },
  { type: "Task", course: "Flutter Development", due: "Tuesday, 10 November" },
  { type: "Task", course: "UI/UX Fundamental", due: "Tuesday, 10 November" },
  {
    type: "Discussion",
    course: "UI/UX Fundamental",
    time: "12:00 PM - 15:00 PM",
  },
];
const CourseProgress = ({ course }) => (
  <Box className="flex gap-6 bg-white rounded-md p-2 drop-shadow-none" mb={2}>
    <img className="w-24 h-20 rounded-2xl" src={course.img} alt="" />
    <div className="space-y-2">
      <h3 className="text-md font-bold">{course.title}</h3>
      <LinearProgress
        variant="determinate"
        value={(course.progress / course.total) * 100}
      />
      <p className="text-[#8B8E81]">{`${course.progress} of ${course.total} course progress`}</p>
    </div>
  </Box>
);

const UpcomingTask = ({ task }) => (
  <ListItem>
    <ListItemText
      className="bg-white p-3 rounded-lg "
      primary={`${task.type} - ${task.course} `}
      secondary={task.time || `Due: ${task.due}`}
    />
  </ListItem>
);
const MyClassPage = () => {
  return (
    <div className="grid grid-cols-2 gap-3 my-12">
      <div>
        <h2 className="text-2xl py-6 font-bold">Course in progress</h2>
        {courses.map((course, index) => (
          <CourseProgress key={index} course={course} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl  font-bold">Upcoming Tasks</h2>
        <span>Tuesday, November 10</span>

        <List>
          {tasks.map((task, index) => (
            <UpcomingTask key={index} task={task} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default MyClassPage;
