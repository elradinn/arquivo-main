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

        // Developer
        $testUser1 = User::create([
            'name' => 'John Alfred Alfonso',
            'email' => 'johnalfredalfonso12@gmail.com',
            'password' => '12345678',
            'office_position' => 'Admin Staff',
            'workflow_role' => 'unassigned',
        ]);

        // Director
        $testUser2 = User::create([
            'name' => 'Angelo Alteza',
            'email' => 'emmanuelangelocanares.alteza@bicol-u.edu.ph',
            'password' => '12345678',
            'office_position' => 'Director',
            'workflow_role' => 'approver',
        ]);

        // Admin Staff
        $testUser3 = User::create([
            'name' => 'Mark Elthon Jay Omanga',
            'email' => 'markelthonjaymanoza.omanga@bicol-u.edu.ph',
            'password' => '12345678',
            'office_position' => 'Admin Staff',
            'workflow_role' => 'unassigned',
        ]);

        // Coordinator
        $testUser4 = User::create([
            'name' => 'Geryme Mendez',
            'email' => 'gerymeacuna.mendez@bicol-u.edu.ph',
            'password' => '12345678',
            'office_position' => 'Coordinator',
            'workflow_role' => 'reviewer',
        ]);

        // Coordinator
        $testUser5 = User::create([
            'name' => 'John Carlo Abillano',
            'email' => 'johncarlobutlig.abillano@bicol-u.edu.ph',
            'password' => '12345678',
            'office_position' => 'Coordinator',
            'workflow_role' => 'reviewer',
        ]);

        $testUser1->assignRole('admin');
        $testUser2->assignRole('admin');
        $testUser3->assignRole('admin');
        $testUser4->assignRole('admin');
        $testUser5->assignRole('admin');


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

        Metadata::create([
            'name' => 'Subject',
            'type' => 'string',
        ]);

        Metadata::create([
            'name' => 'For',
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
