<?php

namespace App\Admin\Controllers;

use Andruby\DeepAdmin\Components\Grid\SortEdit;
use Andruby\DeepAdmin\Models\EntityField;
use App\Admin\Models\HomeColumn;
use App\Admin\Models\HomeColumnIds;
use Illuminate\Support\Facades\DB;
use Andruby\DeepAdmin\Components\Form\Input;
use Andruby\DeepAdmin\Components\Form\Select;
use Andruby\DeepAdmin\Components\Form\Transfer;
use Andruby\DeepAdmin\Components\Grid\Tag;
use Andruby\DeepAdmin\Components\Widgets\Card;
use Andruby\DeepAdmin\Form;
use Andruby\DeepAdmin\Models\Entity;
use Andruby\DeepAdmin\Controllers\ContentController;
use Andruby\DeepAdmin\Grid;
use Andruby\DeepAdmin\Models\Content;
use Andruby\DeepAdmin\Layout\Row;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;

class DialogController extends ContentController
{
    private $createUrl = "/home/dialog/create?";

    protected function create_url()
    {
        return $this->createUrl;
    }

    protected function grid_list(Grid $grid)
    {
//        $grid->dialogForm($this->form()->isDialog());
        $grid->addDialogForm($this->form()->isDialog());
        $grid->editDialogForm($this->form(true)->isDialog());

        return $grid; // TODO: Change the autogenerated stub
    }


//    protected function form($isEdit = 0)
//    {
//        $form = new Form(new \Andruby\DeepAdmin\Models\Content());
//        $form->actionParams(['entity_id' => 62]);
//
//
//        $form->item('name', '姓名')
//            ->component(Input::make())
//            ->inputWidth(10);
//        $form->item('nickname', '昵称')
//            ->component(Input::make())
//            ->inputWidth(10);
//        if ($isEdit) {
//            $form->item('mobile', '电话')
//                ->component(Input::make())
//                ->inputWidth(10);
//        }
//
//        return $form; // TODO: Change the autogenerated stub
//    }
}
