<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Modules\Item\Models\Item;
use Carbon\Carbon;

class ArchiveCommand extends Command
{
    protected $signature = 'archive:items';

    protected $description = 'Automatically archive items based on their creation date';

    public function handle()
    {
        $this->info('Archiving process started.');

        // Define archiving frequencies in years
        $frequencies = [
            1,
            2,
            3,
            4,
            5,
        ];

        $totalArchived = 0;

        foreach ($frequencies as $years) {
            $thresholdDate = Carbon::now()->subYears($years);
            $itemsToArchive = Item::whereNull('archived_at')
                ->whereDate('created_at', '<=', $thresholdDate)
                ->get();

            foreach ($itemsToArchive as $item) {
                $item->archived_at = Carbon::now();
                $item->save();

                Log::info("Item archived: ID {$item->id}, Name: {$item->name}, Archived At: {$item->archived_at}");
                $totalArchived++;
            }

            $this->info("Archived items older than {$years} year(s).");
        }

        if ($totalArchived === 0) {
            Log::info("No items were archived during this run");
        }

        $this->info('Archiving process completed.');
    }
}
