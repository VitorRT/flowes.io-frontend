/**
 * Alterações grandes.
 * ** VitorRT **
 * 
 * Comentário: Tive que refazer esse código inteiro apenas para facilitar o trabalho dos desenvolvedores front-end,
 * agora ao falhar a requisitar a api o website não irá ser interrompido, pois esta action está preparada para lidar com esse tipo
 * de situação. 
 * 
 * ps: adicionei a lib chalk que da cores a textos, dessa forma fica mais interativo o desenvolvimento. Usem e abusem.
 */

"use server";
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import chalk from 'chalk';

const url = process.env.NEXT_PUBLIC_BASE_URL + "/conta";

export async function createProjects(formData) {
  try {
    const token = cookies().get('flowes_token')

    const options = {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.value}`
      }
    }

    const resp = await fetch(url, options);

    if (resp.status !== 201) {
      const json = await resp.json();
      const errors = json.reduce((str, error) => str += error.message + ". ", "");
      return { message: `Erro ao cadastrar projeto. ${errors}` };
    }

    revalidatePath("/projetos");
    return { success: "ok" };
  } catch (error) {
    console.error('Erro ao criar projeto:', error);
    return { error: "Erro ao criar projeto." };
  }
}

export async function getProjetos() {
  try {
    const token = cookies().get('flowes_token')
    const options = {
      headers: {
        "Authorization": `Bearer ${token.value}`
      }
    }

    const resp = await fetch(url, options);

    if (resp.status !== 200) {
      console.error('Erro ao buscar projetos:', await resp.json());
      return { error: "Erro ao buscar projetos." };
    }

    return resp.json();
  } catch (error) {
    console.error(chalk.red('Erro ao buscar projetos.'));
    return { error: "Erro ao buscar projetos." };
  }
}

export async function destroy(id) {
  const token = cookies().get('flowes_token')
  try {
    const urlDelete = url + "/" + id;

    const options = {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token.value}`
      }
    }

    const resp = await fetch(urlDelete, options);

    if (resp.status !== 204) {
      console.error('Erro ao apagar projeto:', resp.status);
      return { error: "Erro ao apagar projeto. " + resp.status };
    }

    revalidatePath('/projetos');
    return null;
  } catch (error) {
    console.error(chalk.red('Erro ao apagar projeto.'));
    return { error: "Erro ao apagar projeto." };
  }
}

export async function getProjetoById(id) {
  const token = cookies().get('flowes_token')
  try {
    const getUrl = url + "/" + id;

    const options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token.value}`
      }
    }

    const resp = await fetch(getUrl, options);

    if (resp.status !== 200) {
      console.error(chalk.red('Erro ao buscar dados do projeto:'), await resp.json());
      return { error: "Erro ao buscar dados do projeto." };
    }

    return await resp.json();
  } catch (error) {
    console.error(chalk.red('Erro ao buscar dados do projeto.'));
    return { error: "Erro ao buscar dados do projeto." };
  }
}

export async function updateProject(projeto) {
  const token = cookies().get('flowes_token')
  try {
    const updateUrl = url + "/" + projeto.id;

    const options = {
      method: "PUT",
      body: JSON.stringify(projeto),
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.value}` 
      },
    }

    const resp = await fetch(updateUrl, options);

    if (resp.status !== 200) {
      console.error('Erro ao atualizar conta:', resp.status);
      return { error: "Erro ao atualizar conta." };
    }

    revalidatePath('/projetos');
    return null;
  } catch (error) {
    console.error(chalk.red('Erro ao atualizar conta.'));
    return { error: "Erro ao atualizar conta." };
  }
}
