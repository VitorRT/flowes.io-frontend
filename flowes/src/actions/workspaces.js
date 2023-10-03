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
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import chalk from "chalk";
const url = process.env.NEXT_PUBLIC_BASE_URL + "/workspace";

export async function createWorkspace(formData) {
  try {
    const token = cookies().get('flowes_token')

    const options = {
      method: 'POST',
      body: JSON.stringify({
        client: { id: 1 },
        ...Object.fromEntries(formData)
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.value}`
      }
    }

    const resp = await fetch(url, options);

    if (resp.status !== 201) {
      return { message: `Erro ao cadastrar workspace.` };
    }

    revalidatePath("/workspaces");
    return { success: "ok" };
  } catch (error) {
    console.error(chalk.red('Erro ao criar workspace.'));
    return { error: "Erro ao criar workspace." };
  }
}

export async function getWorkspaces() {
  try {
    const token = cookies().get('flowes_token') 
    const options = {
      headers: {
        "Authorization": `Barer ${token.value}`
      }
    }

    const resp = await fetch(url, options);

    if (resp.status !== 200) {
      console.error('Erro ao buscar workspaces:', await resp.json());
      return { error: "Erro ao buscar workspaces." };
    }

    const data = await resp.json();

    revalidatePath("/workspaces");
    return data;
  } catch (error) {
    console.error(chalk.red('Erro ao buscar workspaces.'));
    return { error: "Erro ao buscar workspaces." };
  }
}

export async function destroy(id) {
  const token = cookies().get('flowes_token') 
  try {
    const urlDelete = url + "/" + id;

    const options = {
      method: "DELETE",
      headers: {
        "Authorization": `Barer ${token.value}`
      }
    }

    const resp = await fetch(urlDelete, options);

    if (resp.status !== 204) {
      console.error('Erro ao apagar workspace:', resp.status);
      return { error: "Erro ao apagar workspace. " + resp.status };
    }

    revalidatePath('/workspaces');
    return null;
  } catch (error) {
    console.error(chalk.red('Erro ao apagar workspace.'));
    return { error: "Erro ao apagar workspace." };
  }
}

export async function getWorkspaceById(id) {
  const token = cookies().get('flowes_token') 
  try {
    const getUrl = url + "/" + id;

    const options = {
      method: "GET",
      headers: {
        "Authorization": `Barer ${token.value}`
      }
    }

    const resp = await fetch(getUrl, options);

    if (resp.status !== 200) {
      console.error('Erro ao buscar dados da workspace:', await resp.json());
      return { error: "Erro ao buscar dados da workspace." };
    }

    return await resp.json();
  } catch (error) {
    console.error(chalk.red('Erro ao buscar dados da workspace.'));
    return { error: "Erro ao buscar dados da workspace." };
  }
}

export async function updateWorkspace(workspace) {
  const token = cookies().get('flowes_token') 
  try {
    const updateUrl = url + "/" + workspace.id;
    const payload = {
      name: workspace.name,
      workspaceImage: workspace.workspaceImage,
      description: workspace.description
    }
    const options = {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { 
        "Content-Type": "application/json", 
        "Authorization": `Barer ${token.value}`
      },
    }

    const resp = await fetch(updateUrl, options);

    if (resp.status !== 200) {
      console.error('Erro ao atualizar workspace:', resp.status);
      return { error: "Erro ao atualizar workspace." };
    }

    revalidatePath('/workspaces');
    return null;
  } catch (error) {
    console.error(chalk.red('Erro ao atualizar workspace.'));
    return { error: "Erro ao atualizar workspace." };
  }
}
