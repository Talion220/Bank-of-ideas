import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { Icons } from "../../shared/images/Icons";
import { notifications } from "@mantine/notifications";
import classes from "./ideaCreate.module.css";
import {
  Box,
  Button,
  Container,
  Group,
  Textarea,
  Select,
  TextInput,
  Title,
  Text,
  rem,
  Center,
  FileButton,
} from "@mantine/core";
import {
  useForm,
  isNotEmpty,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { useState, useRef } from "react";
import useIdeasStore from "../../data/stores/useIdeasStore";
import { useNavigate } from "react-router-dom";
import scrollToTop from "../../shared/utilities/ScrollToTop";

function IdeaCreate() {
  const { category, setCategory, postNewIdea } = useIdeasStore((state) => ({
    category: state.category,
    setCategory: state.setCategory,
    postNewIdea: state.postNewIdea,
  }));

  const [file, setFile] = useState(null);
  const resetRef = useRef(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      category: category,
      ideaTitle: "",
      businessProcesses: null,
      problem: "",
      solution: "",
      result: "",
      note: "",
      coauthors: "",
    },
    validate: {
      category: isNotEmpty("Выберите категорию идеи"),
      ideaTitle: (value) =>
        value.length < 3 ? "Название должно быть больше 2-х символов" : null,
      businessProcesses: isNotEmpty("Выберите бизнес процесс"),
      problem: isNotEmpty("Опишите проблему"),
      solution: isNotEmpty("Опишите решение"),
      result: isNotEmpty("Опишите результат"),
    },
  });

  const handleError = (errors) => {
    if (errors.category) {
      notifications.show({
        title: "Ошибка",
        message: "Выберите категорию",
        color: "red",
        classNames: classes,
      });
    }
    if (errors.ideaTitle) {
      notifications.show({
        title: "Ошибка",
        message: "Введите название идеи",
        color: "red",
        classNames: classes,
      });
    }
    if (errors.businessProcesses) {
      notifications.show({
        title: "Ошибка",
        message: "Выберите бизнес-процесс",
        color: "red",
        classNames: classes,
      });
    }
    if (errors.problem) {
      notifications.show({
        title: "Ошибка",
        message: "Опишите проблему",
        color: "red",
        classNames: classes,
      });
    }
    if (errors.solution) {
      notifications.show({
        title: "Ошибка",
        message: "Опишите решение",
        color: "red",
        classNames: classes,
      });
    }
    if (errors.result) {
      notifications.show({
        title: "Ошибка",
        message: "Опишите результат",
        color: "red",
        classNames: classes,
      });
    }
  };

  const avatar = "/src/shared/images/avatar.png";
  const author = "Иванов Иван Иванович";
  // const file = "";

  return (
    <Container size="lg" mt={40}>
      <Center>
        <Title mb={40}>Создать идею</Title>
      </Center>

      <Box
        component="form"
        maw={800}
        mx="auto"
        // onSubmit={form.onSubmit(console.log, handleError)}
        onSubmit={form.onSubmit((values) => {
          // handleError(form.errors);
          // console.log(form.errors);
          const {
            category,
            ideaTitle,
            businessProcesses,
            problem,
            solution,
            result,
            note,
            coauthors,
          } = values;
          postNewIdea(
            author,
            avatar,
            ideaTitle,
            category,
            businessProcesses,
            problem,
            solution,
            result,
            note,
            coauthors,
            file
          );
          notifications.show({
            message: "Ваша идея опубликована",
            classNames: classes,
          });
          navigate("/idea");
          scrollToTop();
        }, handleError)}
      >
        <Select
          label="Категория идеи"
          placeholder="Выберите категорию..."
          data={[
            "Предложение по улучшению",
            "Рационализаторское предложение",
            "Лучшая практика",
          ]}
          defaultValue={category}
          clearable
          {...form.getInputProps("category")}
          radius={12}
          size="md"
          mt="md"
          withAsterisk
        />
        <TextInput
          label="Название предложения"
          placeholder="Коротко опишите название Вашей идеи..."
          withAsterisk
          {...form.getInputProps("ideaTitle")}
          radius={12}
          size="md"
          mt="md"
        />
        <Select
          label="Бизнес-процесс"
          placeholder="Выберите бизнес-процесс..."
          data={[
            "Бизнес-процесс 1",
            "Бизнес-процесс 2",
            "Бизнес-процесс 3",
            "Бизнес-процесс 4",
            "Бизнес-процесс 5",
            "Бизнес-процесс 6",
          ]}
          clearable
          {...form.getInputProps("businessProcesses")}
          radius={12}
          size="md"
          mt="md"
          withAsterisk
        />

        <Textarea
          placeholder="Опишите решаемую проблему..."
          label="Проблема"
          autosize
          minRows={4}
          {...form.getInputProps("problem")}
          radius={12}
          size="md"
          mt="md"
          withAsterisk
        />
        <Textarea
          placeholder="Опишите, что нужно сделать длоя решения проблемы..."
          label="Решение"
          autosize
          minRows={4}
          {...form.getInputProps("solution")}
          radius={12}
          size="md"
          mt="md"
          withAsterisk
        />
        <Textarea
          placeholder="Опишите какой будет результат и эффект от внедрения вашей идеи..."
          label="Результат"
          autosize
          minRows={4}
          {...form.getInputProps("result")}
          radius={12}
          size="md"
          mt="md"
          withAsterisk
        />
        <Textarea
          placeholder="Укадите дополнительную информацию при необходимости..."
          label="Примечание"
          autosize
          minRows={4}
          {...form.getInputProps("note")}
          radius={12}
          size="md"
          mt="md"
        />

        <TextInput
          label="Соавторы"
          placeholder="Укажите соавторов..."
          {...form.getInputProps("coauthors")}
          // withAsterisk
          radius={12}
          size="md"
          mt="md"
        />

        <Group justify="start" mt="md">
          <FileButton
            resetRef={resetRef}
            onChange={setFile}
            accept="file/docx,file/pdf"
          >
            {(props) => (
              <Button {...props} radius={12} size="md">
                Загрузить документ
              </Button>
            )}
          </FileButton>
          <Button
            disabled={!file}
            color="red"
            onClick={clearFile}
            radius={12}
            size="md"
          >
            Открепить
          </Button>
        </Group>

        {file && (
          <Text size="sm" ta="center" mt="sm">
            Выбранный файл: {file.name}
          </Text>
        )}

        <Group justify="flex-end" mt="md">
          <Button type="submit" radius={12} size="md">
            Опубликовать
          </Button>
          <Button
            radius={12}
            size="md"
            color="red"
            onClick={() => {
              setCategory(null);
              form.reset();
            }}
          >
            Отменить
          </Button>
        </Group>
      </Box>
    </Container>
  );
}

export default IdeaCreate;
