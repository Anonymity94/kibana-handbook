# 仪表盘

> 原文地址：[https://www.elastic.co/guide/en/kibana/current/dashboard.html](https://www.elastic.co/guide/en/kibana/current/dashboard.html)

Kibana仪表板是可视化，搜索和地图的集合，通常是实时的。仪表板提供对数据的一览式洞察，使您能够深入了解详细信息。

要开始使用仪表板，请单击侧面导航中的仪表板。使用仪表板，您可以：
- [新建仪表盘](create-new-dashboard)
- 编辑仪表盘
- 分析仪表盘
- 导入/导出仪表盘
- 检查并编辑仪表盘元素

![Dashboard_example](https://www.elastic.co/guide/en/kibana/current/images/Dashboard_example.png)

## 只读访问 <Badge text="X-Pack" type="warn" />

如果在应用程序标题中看到只读图标，则表示您没有足够的权限来创建和保存仪表板。用于创建和编辑仪表板的按钮不可见。有关更多信息，请参阅[授予对Kibana的访问权限](https://www.elastic.co/guide/en/kibana/current/xpack-security-authorization.html#xpack-security-authorization)。

![dashboard-read-only-badge](https://www.elastic.co/guide/en/kibana/current/images/dashboard-read-only-badge.png)

## 仪表盘交互
当你打开Dashhboard时，你会看到仪表板的概述。如果您没有任何仪表板，则可以添加样本数据集，其中包括预先构建的仪表板。

打开仪表板后，您可以通过输入搜索查询，更改时间过滤器或单击可视化，搜索和地图来过滤数据。如果仪表板元素保存了已有的查询条件，这些查询条件都会生效。
