<?php

namespace Database\Seeders;

use Modules\User\Models\User;
use Illuminate\Database\Seeder;
use Modules\Workspace\Actions\CreateWorkspaceAction;
use Modules\Workspace\Data\CreateWorkspaceData;
use Modules\Folder\Actions\CreateFolderAction;
use Modules\Folder\Data\CreateFolderData;
use Modules\Metadata\Models\Metadata;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolePermissionSeeder::class,
        ]);

        //TODO: workflow roles have unassigned, reviewer, approver

        // Create Users
        $testUser1 = User::create([
            'name' => 'John Alfred',
            'email' => 'adminuser@example.com',
            'password' => '12345678',
            'workflow_role' => 'unassigned',
        ]);

        $testUser1->assignRole('admin');

        $testUser2 = User::create([
            'name' => 'Angelo',
            'email' => 'revieweruser1@example.com',
            'password' => '12345678',
            'workflow_role' => 'reviewer',
        ]);

        $testUser3 = User::create([
            'name' => 'Geryme',
            'email' => 'revieweruser2@example.com',
            'password' => '12345678',
            'workflow_role' => 'reviewer',
        ]);

        $testUser4 = User::create([
            'name' => 'Serenity Shoshin',
            'email' => 'serenityshoshin@gmail.com',
            'password' => '12345678',
            'workflow_role' => 'approver',
        ]);

        // Create Metadata
        Metadata::create([
            'name' => 'Country',
            'type' => 'string',
        ]);

        Metadata::create([
            'name' => 'Published Year',
            'type' => 'integer',
        ]);

        Metadata::create([
            'name' => 'Is Confidential',
            'type' => 'boolean',
        ]);

        // Create Workspace through folder
        $createWorkspaceAction = app(CreateWorkspaceAction::class);
        $workspace = $createWorkspaceAction->execute(new CreateWorkspaceData(
            name: 'Administrative',
            owned_by: $testUser1->id
        ));

        $workspace2 = $createWorkspaceAction->execute(new CreateWorkspaceData(
            name: 'Applications',
            owned_by: $testUser1->id
        ));

        $workspace = $createWorkspaceAction->execute(new CreateWorkspaceData(
            name: 'Services',
            owned_by: $testUser1->id
        ));

        $workspace = $createWorkspaceAction->execute(new CreateWorkspaceData(
            name: 'Partnerships',
            owned_by: $testUser1->id
        ));

        $workspace = $createWorkspaceAction->execute(new CreateWorkspaceData(
            name: 'Memorandums',
            owned_by: $testUser1->id
        ));

        // Create Folder
        $createFolderAction = app(CreateFolderAction::class);
        $folder1 = $createFolderAction->execute(new CreateFolderData(
            parent_id: $workspace2->item_id,
            name: 'Student Inbound',
            owned_by: $testUser1->id
        ));

        $folder2 = $createFolderAction->execute(new CreateFolderData(
            parent_id: $workspace2->item_id,
            name: 'Student Outbound',
            owned_by: $testUser1->id
        ));

        $folder3 = $createFolderAction->execute(new CreateFolderData(
            parent_id: $folder2->item_id,
            name: 'Belgium 2024',
            owned_by: $testUser1->id
        ));

        $folder4 = $createFolderAction->execute(new CreateFolderData(
            parent_id: $folder3->item_id,
            name: 'John Doe',
            owned_by: $testUser1->id
        ));

        $folder5 = $createFolderAction->execute(new CreateFolderData(
            parent_id: $folder3->item_id,
            name: 'Mary Jane',
            owned_by: $testUser1->id
        ));
    }
}
