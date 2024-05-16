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

function IdeaCreate() {
  const { category } = useIdeasStore((state) => ({
    category: state.category,
  }));

  const [file, setFile] = useState(null);
  const resetRef = useRef(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const form = useForm({
    validate: {
      Category: isNotEmpty("Выберите категорию идеи"),
      Name: hasLength({ min: 2 }, "Название должно быть больше 2-х символов"),
      BusinessProcesses: isNotEmpty("Выберите бизнес процесс"),
      Problem: isNotEmpty("Опишите проблему"),
      Solution: isNotEmpty("Опишите решение"),
      Result: isNotEmpty("Опишите результат"),
    },
  });

  return (
    <Container size="lg" mt={40}>
      <Center>
        <Title mb={40}>Создать новую идею</Title>
      </Center>

      <Box
        component="form"
        maw={800}
        mx="auto"
        onSubmit={form.onSubmit(() => {})}
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
          {...form.getInputProps("Category")}
          radius={12}
          size="md"
          mt="md"
          withAsterisk
        />
        <TextInput
          label="Название предложения"
          placeholder="Коротко опишите название Вашей идеи..."
          withAsterisk
          {...form.getInputProps("Name")}
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
          {...form.getInputProps("BusinessProcesses")}
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
          {...form.getInputProps("Problem")}
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
          {...form.getInputProps("Solution")}
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
          {...form.getInputProps("Result")}
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
          radius={12}
          size="md"
          mt="md"
        />

        <TextInput
          label="Соавторы"
          placeholder="Укажите соавторов..."
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
          <Button
            type="submit"
            radius={12}
            size="md"
            onClick={() =>
              notifications.show({
                title: "Уведомление",
                message: "Ваша идея опубликована",
                classNames: classes,
              })
            }
          >
            Опубликовать
          </Button>
          <Button radius={12} size="md" color="red">
            Отменить
          </Button>
        </Group>
      </Box>
    </Container>
  );
}

export default IdeaCreate;
