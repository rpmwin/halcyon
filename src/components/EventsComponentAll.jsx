import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';




export function BackgroundBlogCard({  
  key,
  category,

}) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center min-w-[28rem]"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center "
        style={{
          backgroundImage: `url(${category.imageUrl})`
        }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {category.category}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {category.description}
        </Typography >
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">
          <Link to={`/Events/${category.id}`}> View Details</Link>
        </button>
        
        
      </CardBody>
    </Card>
  );
}
