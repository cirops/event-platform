import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
      stage
    }
  }
`;

export const Sidebar = () => {
  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson title="Abertura do evento Ignite Lab" type='live' slug="abertura-do-event-ignite-lab" availableAt={new Date()} />
        <Lesson title="Abertura do evento Ignite Lab" type='live' slug="abertura-do-event-ignite-lab" availableAt={new Date()} />
        <Lesson title="Abertura do evento Ignite Lab" type='live' slug="abertura-do-event-ignite-lab" availableAt={new Date()} />
        <Lesson title="Abertura do evento Ignite Lab" type='live' slug="abertura-do-event-ignite-lab" availableAt={new Date()} />
        <Lesson title="Abertura do evento Ignite Lab" type='live' slug="abertura-do-event-ignite-lab" availableAt={new Date()} />
        <Lesson title="Abertura do evento Ignite Lab" type='live' slug="abertura-do-event-ignite-lab" availableAt={new Date()} />
      </div>
    </aside>
  );
};
