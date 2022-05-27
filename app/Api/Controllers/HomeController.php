<?php

namespace App\Api\Controllers;

use App\Admin\Models\AppInfo;
use App\Admin\Models\ColumnInfo;
use App\Admin\Models\HomeColumn;
use App\Admin\Models\HomeColumnIds;
use App\Models\ContractAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends BaseController
{
    public function index(Request $request)
    {
        $address = $request->input('address', null);
        if ($address) {
            $status = ContractAddress::query()->where('address', $address)
                ->value('status');
            if ($status == '1') {
                $msg = '合约地址在白名单中，可放心';
            } elseif ($status == '2') {
                $msg = '合约地址在黑名单中，请注意！！！';
            } elseif ($status == '3') {
                $msg = '合约地址尚未被系统收录，已经提交BuilderDao科学家公会做安全审查。';
            } else {
                $data['address'] = $address;
                $data['status'] = 3;
                ContractAddress::query()->create($data);
                $msg = '合约地址尚未被系统收录，已经提交BuilderDao科学家公会做安全审查。';
            }
            return $this->responseJson(0, $msg);
        } else {
            return $this->responseJson(-1, '合约地址不能为空');
        }

    }

    public function lists(Request $request)
    {
        $whitelist = ContractAddress::query()->where('status', 1)
            ->get(['id', 'address']);
        $blacklist = ContractAddress::query()->where('status', 2)
            ->get(['id', 'address']);
        $graylist = ContractAddress::query()->where('status', 3)
            ->get(['id', 'address']);
        $data['whitelist'] = $whitelist;
        $data['blacklist'] = $blacklist;
        $data['graylist'] = $graylist;

        return $this->responseJson(0, 'success', $data);

    }

}

